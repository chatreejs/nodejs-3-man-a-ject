var http = require('http');
const request = require('request');
var express = require('express');
var app = express();
var changeCase = require('change-case');

const ApiKey = 'd5898bac8ec6c53e5587936972a98a56';

var Compass = require('./Compass');
var compass = new Compass();

var DescriptionIcon = require('./DescriptionIcon')
var des_icon = new DescriptionIcon();

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
    var current_hour = date.getHours();
    var currentDayOfWeek = date.getDay();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayNameOfWeek = days[currentDayOfWeek];

    //Call IPGeolocation API
    request('https://api.ipgeolocation.io/ipgeo?apiKey=7cc0eab4bbb44d95928fccea5b517f01', function (error, response, body) {
        var obj = JSON.parse(body);
        city = obj.city;

        res.redirect('/province?city=' + city);
    });
});

app.get('/province', (req, res) => {
    id = req.query.id;
    city = req.query.city;
    if (!id && !city) {
        res.sendFile('public/html/404.html', { root: __dirname })
    } else {
        var current_hour = date.getHours();
        var currentDayOfWeek = date.getDay();
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var dayNameOfWeek = days[currentDayOfWeek];

        if (!city) {
            query = 'id=' + id;
        } else {
            query = 'q=' + city;
        }
        //Call Weather API
        request('http://api.openweathermap.org/data/2.5/weather?' + query + '&APPID=' + ApiKey, function (error, response, body) {
            var obj = JSON.parse(body);
            try {
                var item = []
                var description = obj.weather[0].main;
                var city = obj.name;
                var temp_kelvin = obj.main.temp;
                var temp_celsius = temp_kelvin - 273.15;
                var humidity = obj.main.humidity;
                var pressure = obj.main.pressure;
                var wind_speed = obj.wind.speed;
                var wind_deg = obj.wind.deg;
                request('http://api.openweathermap.org/data/2.5/forecast?' + query + '&APPID=' + ApiKey, function (error, response, body) {
                    var obj = JSON.parse(body);
                    var forecast_idx;

                    for (let i = 0; i < obj.list.length; i++) {
                        var dt_txt = obj.list[i].dt_txt;
                        var dt = new Date(dt_txt);
                        if (dt.getHours() > current_hour && dt.getDay() >= currentDayOfWeek) {
                            forecast_idx = i;
                            break;
                        } else if (dt.getHours() == current_hour && dt.getDay() == currentDayOfWeek) {
                            forecast_idx = i+1;
                            break;
                        }
                    }
                    for (let index = 0; index < 9; index++) {
                        var forecast_dt = new Date(obj.list[forecast_idx].dt_txt);
                        var forecast_description = obj.list[forecast_idx].weather[0].description;
                        var forecast_humidity = obj.list[forecast_idx].main.humidity;
                        var forecast_pressure = obj.list[forecast_idx].main.pressure;
                        var forecast_wind_speed = obj.list[forecast_idx].wind.speed;
                        var forecast_wind_deg = obj.list[forecast_idx].wind.deg;

                        if (index == 0) {
                            item[0] = '<div id="carouselControls" class="carousel slide" data-ride="carousel">';
                            item[0] += '<div class="carousel-inner">';
                            //carousel-item #1
                            item[0] += '<div class="carousel-item active">';
                            item[0] += '<div class="container d-flex h-20 align-items-center">';
                            item[0] += '<div class=" mx-auto text-center">';
                            item[0] += '<h2 class="text-white mx-auto" style="margin-top:10rem;">';
                            item[0] += city;
                            item[0] += '</h2>';
                            item[0] += '<h3 class="text-white mx-auto mt-2 mb-5">';
                            item[0] += changeCase.titleCase(description);
                            item[0] += '</h3>';
                            item[0] += '<h1 class="text-white mx-auto mt-5 mb-5">';
                            item[0] += '<canvas class="';
                            item[0] += des_icon.getIcon(description, current_hour);
                            item[0] += '" width="120" height="120"></canvas>';
                            item[0] += temp_celsius.toFixed(0);
                            item[0] += '&deg;</h1>';
                            item[0] += '<h3 class="text-white mx-auto mt-2 mb-5">' + dayNameOfWeek + ' '
                            item[0] += current_hour;
                            item[0] += ':00</h3>';
                            item[0] += '</div>';
                            item[0] += '</div>';
                            item[0] += '<div class="container">';
                            item[0] += '<div class="table-responsive-sm">';
                            item[0] += '<table class="table table-borderless text-white">';
                            item[0] += '<thead>';
                            item[0] += '<tr>';
                            item[0] += '<th scope="col">Wind</th>';
                            item[0] += '<th scope="col">Humidity</th>';
                            item[0] += '<th scope="col">Pressure</th>';
                            item[0] += '</tr>';
                            item[0] += '</thead>';
                            item[0] += '<tbody>';
                            item[0] += '<tr>';
                            item[0] += '<td>' + compass.getDirection(wind_deg) + ' ';
                            item[0] += wind_speed;
                            item[0] += 'km/hr</td>';
                            item[0] += '<td>';
                            item[0] += humidity;
                            item[0] += '%</td>';
                            item[0] += '<td>';
                            item[0] += pressure;
                            item[0] += ' hPa</td>';
                            item[0] += '</tr></tbody></table></div></div>';
                            item[0] += '</div>';
                        } else {
                            var forecast_temp_kelvin = obj.list[forecast_idx].main.temp;
                            var forecast_temp_celsius = forecast_temp_kelvin - 273.15;
                            item[index] = '<div class="carousel-item">';
                            item[index] += '<div class="container d-flex h-20 align-items-center">';
                            item[index] += '<div class=" mx-auto text-center">';
                            item[index] += '<h2 class="text-white mx-auto" style="margin-top:10rem;">';
                            item[index] += city;
                            item[index] += '</h2>';
                            item[index] += '<h3 class="text-white mx-auto mt-2 mb-5">';
                            item[index] += changeCase.titleCase(forecast_description);
                            item[index] += '</h3>';
                            item[index] += '<h1 class="text-white mx-auto mt-5 mb-5">';
                            item[index] += '<canvas class="';
                            item[index] += des_icon.getIcon(forecast_description, forecast_dt.getHours());
                            item[index] += '" width="120" height="120"></canvas>';
                            item[index] += forecast_temp_celsius.toFixed(0);
                            item[index] += '&deg;</h1>';
                            item[index] += '<h3 class="text-white mx-auto mt-2 mb-5">' + days[forecast_dt.getDay()] + ' '
                            item[index] += forecast_dt.getHours();
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
                            item[index] += '<td>' + compass.getDirection(forecast_wind_deg) + ' ';
                            item[index] += forecast_wind_speed;
                            item[index] += 'km/hr</td>';
                            item[index] += '<td>';
                            item[index] += forecast_humidity;
                            item[index] += '%</td>';
                            item[index] += '<td>';
                            item[index] += forecast_pressure;
                            item[index] += ' hPa</td>';
                            item[index] += '</tr></tbody></table></div></div>';
                            item[index] += '</div>';
                            forecast_idx++;
                        }
                    }

                    var list = '';
                    for (let index = 0; index < item.length; index++) {
                        list += item[index];
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
                    html += '<tr>';
                    html += '<td class="text-white" style="width:2%">Sunday</td>'
                    html += '<td class="text-white" style="width:2%"><canvas class="clear-day" width="20" height="20"></canvas></td>'
                    html += '<td class="text-white" style="width:2%">34</td>'
                    html += '<td class="text-white-50" style="width:2%">27</td>'
                    html += '</tr>'
                    html += '<td class="text-white" style="width:2%">Monday</td>'
                    html += '<td class="text-white" style="width:2%"><canvas class="clear-day" width="20" height="20"></canvas></td>'
                    html += '<td class="text-white" style="width:2%">34</td>'
                    html += '<td class="text-white-50" style="width:2%">27</td>'
                    html += '</tr>'
                    html += '<td class="text-white" style="width:2%">Tuesday</td>'
                    html += '<td class="text-white" style="width:2%"><canvas class="clear-day" width="20" height="20"></canvas></td>'
                    html += '<td class="text-white" style="width:2%">33</td>'
                    html += '<td class="text-white-50" style="width:2%">28</td>'
                    html += '</tr>'
                    html += '<td class="text-white" style="width:2%">Wednesday</td>'
                    html += '<td class="text-white" style="width:2%"><canvas class="clear-day" width="20" height="20"></canvas></td>'
                    html += '<td class="text-white" style="width:2%">34</td>'
                    html += '<td class="text-white-50" style="width:2%">28</td>'
                    html += '</tr>'
                    html += '<td class="text-white" style="width:2%">Thursday</td>'
                    html += '<td class="text-white" style="width:2%"><canvas class="clear-day" width="20" height="20"></canvas></td>'
                    html += '<td class="text-white" style="width:2%">37</td>'
                    html += '<td class="text-white-50" style="width:2%">27</td>'
                    html += '</tr>'
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