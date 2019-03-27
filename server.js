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
head += '</head>';

var nav = '<!-- Navigation -->';
nav += '<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">';
nav += '<div class="container">';
nav += '<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"';
nav += 'aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">';
nav += 'Menu';
nav += '<i class="fas fa-bars"></i>';
nav += '</button>';
nav += '<div class="collapse navbar-collapse" id="navbarResponsive">';
nav += '<ul class="navbar-nav ml-auto">';
nav += '<li class="nav-item">';
nav += '<a class="nav-link js-scroll-trigger" href="/">Home</a>';
nav += '</li>';
nav += '<li class="nav-item">';
nav += '<a class="nav-link js-scroll-trigger" href="#">Province</a>';
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

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Running on port : %s', port);
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
        var current_hour = date.getHours();
        var currentDayOfWeek = date.getDay();
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
                            forecast_idx = i;
                            break;
                        } else if (dt.getHours() == current_hour && dt.getDay() == currentDayOfWeek) {
                            //When call api at 09:00, 12:00, 15:00, 18:00
                            forecast_idx = i + 1;
                            break;
                        } else if (dt.getDay() == 0 && currentDayOfWeek == 0 && current_hour == 0) {
                            //When call api at 00:00
                            forecast_idx = i;
                            break;
                        } else if (dt.getHours() == 0 && dt.getDay() == 0 && currentDayOfWeek == 6 && current_hour >= 21) {
                            //9PM Saturday issues
                            //When call api at 21:00 to 23:59 at Saturday
                            forecast_idx = i;
                            break;
                        } else if (current_hour >= 21 && dt.getHours() == 0) {
                            //When call api at 21:00 to 23:59 everyday except Saturday
                            forecast_idx = i;
                            break;
                        }
                    }

                    for (let index = 0; index < 9; index++) {
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

                    for (let index = 0; index < 10; index++) {
                        if (index == 0) {
                            item[index] = '<div id="carouselControls" class="carousel slide" data-ride="carousel">';
                            item[index] += '<div class="carousel-inner">';
                            item[index] += '<div class="carousel-item active">';
                        } else {
                            item[index] = '<div class="carousel-item">';
                        }

                        item[index] += '<div class="container d-flex h-20 align-items-center">';
                        item[index] += '<div class=" mx-auto text-center">';
                        item[index] += '<h2 class="text-white mx-auto" style="margin-top:10rem;">';
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

                    var date_index = currentDayOfWeek;
                    var table = '';
                    var forecast_description;

                    for (let i = 0; i < obj.list.length; i++) {
                        var dt_txt = obj.list[i].dt_txt;
                        var dt = new Date(dt_txt);

                        if (dt.getDay() > date_index && dt.getHours() == 15) {
                            var forecast_dt = new Date(obj.list[i].dt_txt);
                            forecast_description = obj.list[i].weather[0].description;
                            forecast_temp_max_kelvin = obj.list[i].main.temp_max;
                            forecast_temp_max_celsius = forecast_temp_max_kelvin - 273.15;
                            forecast_temp_min_kelvin = obj.list[i].main.temp_min;
                            forecast_temp_min_celsius = forecast_temp_min_kelvin - 273.15;
                            // console.log(forecast_description);

                            table += '<tr>';
                            table += '<td class="text-white" style="width:45%">' + days[forecast_dt.getDay()] + '</td>'
                            table += '<td class="text-white" style="width:20%"><canvas class="'
                            table += des_icon.getIcon(forecast_description, forecast_dt.getHours());
                            table += '" width="20" height="20"></canvas></td>'
                            table += '<td class="text-white" style="width:5%">' + forecast_temp_max_celsius.toFixed(0) + '</td>'
                            table += '<td class="text-white-50" style="width:50%">' + forecast_temp_min_celsius.toFixed(0) + '</td>'
                            table += '</tr>'
                            //console.log(obj.list[i].dt_txt);
                            date_index++;
                        }
                    }

                    var html = '';
                    html += head;
                    html += '<body id="page-top">';
                    html += nav;
                    html += '<header class="masthead">';
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