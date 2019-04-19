var http = require('http');
const request = require('request');
var express = require('express');
var app = express();
var changeCase = require('change-case');

const ApiKey = 'd5898bac8ec6c53e5587936972a98a56';

var Compass = require('./Compass');
var compass = new Compass();

var DescriptionIcon = require('./DescriptionIcon');
var des_icon = new DescriptionIcon();

var QueueJa = require('./QueueJA');

var date = new Date();

app.use(express.static(__dirname + '/public'));

var head = '<head>';
head += '<meta charset="utf-8">';
head += '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">';
head += '<title>Climate Change</title>';
head += '<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">';
head += '<link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet">';
head += '<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">';
head += '<link href="css/climate.css" rel="stylesheet">';
head += '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">';
head += '</head>';

var nav = '<!-- Navigation -->';
nav += '<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">';
nav += '<div class="container">';
nav += '<button class="navbar-toggler navbar-toggler-right" name="menu" type="button" data-toggle="collapse" data-target="#navbarResponsive"';
nav += 'aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">';
nav += 'Menu';
nav += '<i class="fas fa-bars"></i>';
nav += '</button>';
nav += '<div class="collapse navbar-collapse" id="navbarResponsive">';
nav += '<ul class="navbar-nav ml-auto">';
nav += '<li class="nav-item">';
nav += '<a class="nav-link js-scroll-trigger" name="home" href="/">Home</a>';
nav += '</li>';
nav += '<li class="nav-item">';
nav += '<a class="nav-link js-scroll-trigger" name="province" href="#" onclick="openNav()">Province</a>';
nav += '</li>';
nav += '</ul></div></div></nav>';

var footer = '<!-- Footer -->';
footer += '<footer class="bg-black small text-center text-white-50">';
footer += '<div class="container">';
footer += 'Copyright &copy; 3man a ject 2019';
footer += '</div></footer>';

var script = '<script src="vendor/jquery/jquery.min.js"></script>';
script += '<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>';
script += '<script src="vendor/jquery-easing/jquery.easing.min.js"></script>';
script += '<script src="js/climate.min.js"></script>';
script += '<script src="js/skycons.js"></script>';
script += '<script src="js/icon.js"></script>';
script += '<script>$(".carousel").carousel({interval: false})</script>';
script += '<script src="js/sidenav.js"></script>';

var sidenav = '<div id="mySidenav" class="sidenav" >';
sidenav += '<a class="climate-button climate-block climate-left-align" name="north" onclick="myAccFunc()">'
sidenav += 'ภาคเหนือ <i class="fa fa-caret-down"></i>'
sidenav += '</a>'
sidenav += '<div id="demoAcc" class="w3-hide sidenav-dropdown sidenav-card">'
sidenav += '<a href="/weather?id=1153669" class="climate-button" name="chiang_rai">เชียงราย</a>'
sidenav += '<a href="/weather?id=1153671" class="climate-button" name="chiang_mai">เชียงใหม่</a>'
sidenav += '<a href="/weather?id=1608452" class="climate-button" name="nan">น่าน</a>'
sidenav += '<a href="/weather?id=1151426" class="climate-button" name="phayao">พะเยา</a>'
sidenav += '<a href="/weather?id=1607552" class="climate-button" name="phrae">แพร่</a>'
sidenav += '<a href="/weather?id=1152222" class="climate-button" name="mae_hong_son">แม่ฮ่องสอน</a>'
sidenav += '<a href="/weather?id=1152473" class="climate-button" name="lampang">ลำปาง</a>'
sidenav += '<a href="/weather?id=1152468" class="climate-button" name="lamphun">ลำพูน</a>'
sidenav += '<a href="/weather?id=1605215" class="climate-button" name="uttaradit">อุตรดิตถ์</a>'
sidenav += '</div>'
sidenav += '<a class="climate-button climate-block climate-left-align" onclick="myDropFunc()">'
sidenav += 'ภาคตะวันออกเฉียงเหนือ <i class="fa fa-caret-down"></i>'
sidenav += '</a>'
sidenav += '<div id="demoDrop" class="w3-hide sidenav-dropdown sidenav-card">'
sidenav += '<a href="/weather?id=1610469" class="climate-button" name="kalasin">กาฬสินธุ์</a>'
sidenav += '<a href="/weather?id=1609776" class="climate-button" name="khon_kaen">ขอนแก่น</a>'
sidenav += '<a href="/weather?id=1611407" class="climate-button" name="chaiyaphum">ชัยภูมิ</a>'
sidenav += '<a href="/weather?id=1608531" class="climate-button" name="nakhon_phanom">นครพนม</a>'
sidenav += '<a href="/weather?id=1608529" class="climate-button" name="nakhon_ratchasima">นครราชสีมา</a>'
sidenav += '<a href="/weather?id=1611475" class="climate-button" name="bueng_kan">บึงกาฬ</a>'
sidenav += '<a href="/weather?id=1611453" class="climate-button" name="burirum">บุรีรัมย์</a>'
sidenav += '<a href="/weather?id=1608900" class="climate-button" name="maha_sarakham">มหาสารคาม</a>'
sidenav += '<a href="/weather?id=1608597" class="climate-button" name="mukdahan">มุกดาหาร</a>'
sidenav += '<a href="/weather?id=1604769" class="climate-button" name="yasothon">ยโสธร</a>'
sidenav += '<a href="/weather?id=1607001" class="climate-button" name="roi_et">ร้อยเอ็ด</a>'
sidenav += '<a href="/weather?id=1609071" class="climate-button" name="loei">เลย</a>'
sidenav += '<a href="/weather?id=1606239" class="climate-button" name="si_sa_ket">ศรีสะเกษ</a>'
sidenav += '<a href="/weather?id=1606790" class="climate-button" name="sakon_nakhon">สกลนคร</a>'
sidenav += '<a href="/weather?id=1606030" class="climate-button" name="surin">สุรินทร์</a>'
sidenav += '<a href="/weather?id=1608232" class="climate-button" name="nong_khai">หนองคาย</a>'
sidenav += '<a href="/weather?id=1608269" class="climate-button" name="nong_bua_lamphu">หนองบัวลำภู</a>'
sidenav += '<a href="/weather?id=1621060" class="climate-button" name="amnat_charoen">อำนาจเจริญ</a>'
sidenav += '<a href="/weather?id=1605239" class="climate-button" name="udon_thani">อุดรธานี</a>'
sidenav += '<a href="/weather?id=1605245" class="climate-button" name="ubon_ratchathani">อุบลราชธานี</a>'
sidenav += '</div>'
sidenav += '<a class="climate-button climate-block climate-left-align" onclick="myDropFunc2()">'
sidenav += 'ภาคกลาง<i class="fa fa-caret-down"></i>'
sidenav += '</a>'
sidenav += '<div id="demoDrop2" class="w3-hide sidenav-dropdown sidenav-card">'
sidenav += '<a href="/weather?id=1609350" class="climate-button" name="bangkok">กรุงเทพมหานคร</a>'
sidenav += '<a href="/weather?id=1153090" class="climate-button" name="kamphaeng_phet">กำแพงเพชร</a>'
sidenav += '<a href="/weather?id=1611416" class="climate-button" name="chai_nat">ชัยนาท</a>'
sidenav += '<a href="/weather?id=1608539" class="climate-button" name="nakhon_nayok">นครนายก</a>'
sidenav += '<a href="/weather?id=1608534" class="climate-button" name="nakhon_pathom">นครปฐม</a>'
sidenav += '<a href="/weather?id=1608527" class="climate-button" name="nakhon_sawan">นครสวรรค์</a>'
sidenav += '<a href="/weather?id=1609350" class="climate-button" name="nonthaburi">นนทบุรี</a>'
sidenav += '<a href="/weather?id=1607983" class="climate-button" name="pathum_thani">ปทุมธานี</a>'
sidenav += '<a href="/weather?id=1607532" class="climate-button" name="phra_nakhon_si_ayutthaya">พระนครศรีอยุธยา</a>'
sidenav += '<a href="/weather?id=1607725" class="climate-button" name="phichit">พิจิตร</a>'
sidenav += '<a href="/weather?id=1607708" class="climate-button" name="phitsanulok">พิษณุโลก</a>'
sidenav += '<a href="/weather?id=1607737" class="climate-button" name="phetchabun">เพชรบูรณ์</a>'
sidenav += '<a href="/weather?id=1609032" class="climate-button" name="lob_buri">ลพบุรี</a>'
sidenav += '<a href="/weather?id=1606590" class="climate-button" name="samut_prakan">สมุทรปราการ</a>'
sidenav += '<a href="/weather?id=1606586" class="climate-button" name="samut_songkhram">สมุทรสงคราม</a>'
sidenav += '<a href="/weather?id=1606588" class="climate-button" name="samut_sakhon">สมุทรสาคร</a>'
sidenav += '<a href="/weather?id=1606418" class="climate-button" name="saraburi">สระบุรี</a>'
sidenav += '<a href="/weather?id=1606270" class="climate-button" name="sing_buri">สิงห์บุรี</a>'
sidenav += '<a href="/weather?id=1150533" class="climate-button" name="sukhothai">สุโขทัย</a>'
sidenav += '<a href="/weather?id=1606033" class="climate-button" name="suphan_buri">สุพรรณบุรี</a>'
sidenav += '<a href="/weather?id=1621035" class="climate-button" name="ang_thong">อ่างทอง</a>'
sidenav += '<a href="/weather?id=1605221" class="climate-button" name="uthai_thani">อุทัยธานี</a>'
sidenav += '</div>'
sidenav += '<a class="climate-button climate-block climate-left-align" onclick="myDropFunc3()">'
sidenav += 'ภาคใต้<i class="fa fa-caret-down"></i>'
sidenav += '</a>'
sidenav += '<div id="demoDrop3" class="w3-hide sidenav-dropdown sidenav-card">'
sidenav += '<a href="/weather?id=1152633" class="climate-button" name="krabi">กระบี่</a>'
sidenav += '<a href="/weather?id=1153557" class="climate-button" name="chumphon">ชุมพร</a>'
sidenav += '<a href="/weather?id=1150007" class="climate-button" name="trang">ตรัง</a>'
sidenav += '<a href="/weather?id=1151933" class="climate-button" name="nakhon_si_thammarat">นครศรีธรรมราช</a>'
sidenav += '<a href="/weather?id=1608409" class="climate-button" name="narathiwat">นราธิวาส</a>'
sidenav += '<a href="/weather?id=1607978" class="climate-button" name="pattani">ปัตตานี</a>'
sidenav += '<a href="/weather?id=1151464" class="climate-button" name="phangnga">พังงา</a>'
sidenav += '<a href="/weather?id=1607779" class="climate-button" name="phatthalung">พัทลุง</a>'
sidenav += '<a href="/weather?id=1151254" class="climate-button" name="phuket">ภูเก็ต</a>'
sidenav += '<a href="/weather?id=1604870" class="climate-button" name="yala">ยะลา</a>'
sidenav += '<a href="/weather?id=1150965" class="climate-button" name="ranong">ระนอง</a>'
sidenav += '<a href="/weather?id=1606147" class="climate-button" name="songkhla">สงขลา</a>'
sidenav += '<a href="/weather?id=1606376" class="climate-button" name="satun">สตูล</a>'
sidenav += '<a href="/weather?id=1150515" class="climate-button" name="surat_thani">สุราษฎร์ธานี</a>'
sidenav += '</div>'
sidenav += '</div>'



var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('\x1b[32m%s%s\x1b[0m', 'Running on port : ', port);
});

app.get('/', (req, res) => {
    //Call IPGeolocation API
    request('https://api.ipgeolocation.io/ipgeo?apiKey=7cc0eab4bbb44d95928fccea5b517f01', (error, response, body) => {
        if (response.statusCode == 200) {
            var obj = JSON.parse(body);
            city = obj.city;
            //Redirect and get weather at current location
            res.redirect('/weather?q=' + city);
        }
    });
});

app.get('/weather', (req, res) => {
    id = req.query.id;
    city = req.query.q;
    if (!id && !city) {
        res.sendFile('public/html/404.html', { root: __dirname })
    } else {
        //asd
        var current_hour = date.getHours();
        var currentDayOfWeek = date.getDay();
        var currentDayOfMonth = date.getDate();
        var current_month = date.getMonth();

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        if (!city) {
            query = 'id=' + id;
        } else {
            query = 'q=' + city;
        }

        //Call Weather API
        request('http://api.openweathermap.org/data/2.5/weather?' + query + '&APPID=' + ApiKey, (error, response, body) => {
            var obj = JSON.parse(body);
            try {
                var item = []
                var city = obj.name;

                var hour = new QueueJa(12);
                var dayNameOfWeek = new QueueJa(12);
                var description = new QueueJa(12);
                var temp = new QueueJa(12);
                var temp_max = new QueueJa(5);
                var temp_min = new QueueJa(5);
                var humidity = new QueueJa(12);
                var pressure = new QueueJa(12);
                var wind_speed = new QueueJa(12);
                var wind_deg = new QueueJa(12);

                hour.enqueue(current_hour);
                dayNameOfWeek.enqueue(days[currentDayOfWeek]);
                description.enqueue(obj.weather[0].main);
                temp.enqueue(obj.main.temp - 273.15);
                humidity.enqueue(obj.main.humidity);
                pressure.enqueue(obj.main.pressure);
                wind_speed.enqueue(obj.wind.speed);
                wind_deg.enqueue(obj.wind.deg);

                request('http://api.openweathermap.org/data/2.5/forecast?' + query + '&APPID=' + ApiKey, (error, response, body) => {
                    var obj = JSON.parse(body);
                    var forecast_idx;

                    for (let i = 0; i < obj.list.length; i++) {
                        var dt_txt = obj.list[i].dt_txt;
                        var dt = new Date(dt_txt);

                        if (dt.getHours() > current_hour && dt.getDay() >= currentDayOfWeek && currentDayOfWeek != 0) {
                            //Default
                            forecast_idx = i;
                            break;
                        } else if (dt.getHours() == current_hour && dt.getDay() == currentDayOfWeek) {
                            //When call api at 09:00, 12:00, 15:00, 18:00
                            forecast_idx = i + 1;
                            break;
                        } else if (dt.getDay() == 0 && currentDayOfWeek == 0 && current_hour == 0) {
                            //When call api at 00:00 on Sunday
                            forecast_idx = i;
                            break;
                        } else if (dt.getDay() == 0 && currentDayOfWeek == 0 && current_hour >= 0) {
                            //When call api at 01:00 to 23:59 on Sunday
                            forecast_idx = i + 1;
                            break;
                        } else if (dt.getHours() == 0 && dt.getDay() == 0 && currentDayOfWeek == 6 && current_hour >= 21) {
                            //9PM Saturday issues
                            //When call api at 21:00 to 23:59 on Saturday
                            forecast_idx = i;
                            break;
                        } else if (current_hour >= 21 && dt.getHours() == 0) {
                            //When call api at 21:00 to 23:59 everyday except Saturday
                            forecast_idx = i;
                            break;
                        }
                    }

                    if (current_hour % 3 == 0) {
                        var list_len = 8;
                    } else {
                        var list_len = 9;
                    }
                    
                    for (let index = 0; index < list_len; index++) {
                        var forecast_dt = new Date(obj.list[forecast_idx].dt_txt);

                        hour.enqueue(forecast_dt.getHours());
                        dayNameOfWeek.enqueue(days[forecast_dt.getDay()]);
                        description.enqueue(obj.list[forecast_idx].weather[0].description);
                        temp.enqueue(obj.list[forecast_idx].main.temp - 273.15);
                        humidity.enqueue(obj.list[forecast_idx].main.humidity);
                        pressure.enqueue(obj.list[forecast_idx].main.pressure);
                        wind_speed.enqueue(obj.list[forecast_idx].wind.speed);
                        wind_deg.enqueue(obj.list[forecast_idx].wind.deg);
                        forecast_idx++;
                    }

                    for (let index = 0; index < list_len + 1; index++) {
                        if (index == 0) {
                            item[index] = '<div id="carouselControls" class="carousel slide" data-ride="carousel">';
                            item[index] += '<div class="carousel-inner">';
                            item[index] += '<div class="carousel-item active">';
                        } else {
                            item[index] = '<div class="carousel-item">';
                        }

                        item[index] += '<div class="container d-flex h-20 align-items-center">';
                        item[index] += '<div class=" mx-auto text-center">';
                        item[index] += '<h2 class="text-white mx-auto" name="city" style="margin-top:10rem;">';
                        item[index] += city;
                        item[index] += '</h2>';
                        item[index] += '<h3 class="text-white mx-auto mt-2 mb-5">';
                        item[index] += changeCase.titleCase(description.getFront());
                        item[index] += '</h3>';
                        item[index] += '<h1 class="text-white mx-auto mt-5 mb-5">';
                        item[index] += '<canvas class="';
                        item[index] += des_icon.getIcon(description.dequeue(), hour.getFront());
                        item[index] += '" width="120" height="120"></canvas>';
                        item[index] += temp.dequeue().toFixed(0);
                        item[index] += '&deg;</h1>';
                        item[index] += '<h3 class="text-white mx-auto mt-2 mb-5">' + dayNameOfWeek.dequeue() + ' '
                        item[index] += hour.dequeue();
                        item[index] += ':00</h3>';
                        item[index] += '</div>';
                        item[index] += '</div>';
                        item[index] += '<div class="container">';
                        item[index] += '<div class="table-responsive-sm">';
                        item[index] += '<table class="table table-borderless text-white">';
                        item[index] += '<thead>';
                        item[index] += '<tr>';
                        item[index] += '<th scope="col">Wind</th>';
                        item[index] += '<th scope="col">Humidity</th>';
                        item[index] += '<th scope="col">Pressure</th>';
                        item[index] += '</tr>';
                        item[index] += '</thead>';
                        item[index] += '<tbody>';
                        item[index] += '<tr>';
                        item[index] += '<td>' + compass.getDirection(wind_deg.dequeue()) + ' ';
                        item[index] += wind_speed.dequeue();
                        item[index] += 'km/hr</td>';
                        item[index] += '<td>';
                        item[index] += humidity.dequeue();
                        item[index] += '%</td>';
                        item[index] += '<td>';
                        item[index] += pressure.dequeue();
                        item[index] += ' hPa</td>';
                        item[index] += '</tr></tbody></table></div></div>';
                        item[index] += '</div>';
                    }

                    var list = '';
                    for (let index = 0; index < item.length; index++) {
                        list += item[index];
                    }

                    var date_index = currentDayOfMonth;
                    var newmonth_date_index = 1;
                    var table = '';

                    for (let index = 0; index < obj.list.length; index++) {
                        var dt_txt = obj.list[index].dt_txt;
                        var dt = new Date(dt_txt);

                        if (current_hour >= 21) {
                            if (dt.getHours() == 0 && dt.getDate() > date_index && dt.getMonth() == current_month) {
                                hour.enqueue(dt.getHours());
                                dayNameOfWeek.enqueue(days[dt.getDay()]);
                                description.enqueue(obj.list[index].weather[0].description);
                                temp_max.enqueue(obj.list[index].main.temp_max - 273.15);
                                temp_min.enqueue(obj.list[index].main.temp_min - 273.15);
                                date_index++;
                            } else if (dt.getHours() == 0 && dt.getDate() >= newmonth_date_index && dt.getMonth() > current_month) {
                                hour.enqueue(dt.getHours());
                                dayNameOfWeek.enqueue(days[dt.getDay()]);
                                description.enqueue(obj.list[index].weather[0].description);
                                temp_max.enqueue(obj.list[index].main.temp_max - 273.15);
                                temp_min.enqueue(obj.list[index].main.temp_min - 273.15);
                                newmonth_date_index++;
                            }
                        } else {
                            if (dt.getHours() >= current_hour && dt.getDate() > date_index && dt.getMonth() == current_month) {
                                hour.enqueue(dt.getHours());
                                dayNameOfWeek.enqueue(days[dt.getDay()]);
                                description.enqueue(obj.list[index].weather[0].description);
                                temp_max.enqueue(obj.list[index].main.temp_max - 273.15);
                                temp_min.enqueue(obj.list[index].main.temp_min - 273.15);
                                date_index++;
                            } else if (dt.getHours() >= current_hour && dt.getDate() >= newmonth_date_index && dt.getMonth() > current_month) {
                                hour.enqueue(dt.getHours());
                                dayNameOfWeek.enqueue(days[dt.getDay()]);
                                description.enqueue(obj.list[index].weather[0].description);
                                temp_max.enqueue(obj.list[index].main.temp_max - 273.15);
                                temp_min.enqueue(obj.list[index].main.temp_min - 273.15);
                                newmonth_date_index++;
                            }
                        }
                    }

                    for (let index = 0; index < 3; index++) {
                        table += '<tr>';
                        table += '<td class="text-white" style="width:45%">' + dayNameOfWeek.dequeue() + '</td>'
                        table += '<td class="text-white" style="width:20%"><canvas class="'
                        table += des_icon.getIcon(description.dequeue(), hour.dequeue());
                        table += '" width="20" height="20"></canvas></td>'
                        table += '<td class="text-white" style="width:5%">' + temp_max.dequeue().toFixed(0) + '</td>'
                        table += '<td class="text-white-50" style="width:50%">' + temp_min.dequeue().toFixed(0) + '</td>'
                        table += '</tr>'
                    }

                    var html = '';
                    html += head;
                    html += '<body id="page-top">';
                    html += nav;
                    html += '<header class="masthead">';
                    html += sidenav;
                    html += '<div id="main">';
                    html += list;
                    html += '</div>';
                    html += '<a class="left carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">';
                    html += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
                    html += '<span class="sr-only">Previous</span>';
                    html += '</a>';
                    html += '<a class="right carousel-control-next" href="#carouselControls" role="button" data-slide="next">';
                    html += '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
                    html += '<span class="sr-only">Next</span>'
                    html += '</a>'
                    html += '</div>';

                    html += '<div class="container">';
                    html += '<div class="table-responsive-sm">';
                    html += '<table class="table table-borderless text-white">';
                    html += '<tbody>';
                    html += table;
                    html += '</tbody></table></div></div>';
                    html += '</header>';
                    html += footer;
                    html += script;
                    html += '</body>';

                    res.send(html)
                });
            } catch (error) {
                console.log(error);
                res.sendFile('public/html/404.html', { root: __dirname });
            }
        });
    }
});