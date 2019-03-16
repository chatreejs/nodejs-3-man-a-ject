var http = require('http');
var express = require('express');
var app = express();

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
nav += '<a class="nav-link js-scroll-trigger" href="#">Home</a>';
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

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Running on port : %s', port);
});

var date = new Date();
var current_hour = date.getHours();
var city = 'Bangkok';
var temperature = 28;
var humidity = 76;
var pressure = 1012;
var wind_speed = 10;
var wind_deg = 157.5;
var description = 'cloudy';

app.get('/', (req, res) => {
    var html = '';
    html += head;
    html += '<body id="page-top">';
    html += nav;
    html += '<header class="masthead">';
    html += '<div class="container d-flex h-20 align-items-center">';
    html += '<div class=" mx-auto text-center">';
    html += '<h2 class="text-white mx-auto" style="margin-top:50%;">';
    html += city;
    html += '</h2>';
    html += '<h3 class="text-white mx-auto mt-2 mb-5">';
    html += description.charAt(0).toUpperCase() + description.slice(1);
    html += '</h3>';
    html += '<h1 class="text-white mx-auto mt-5 mb-5">';
    html += '<canvas class="';
    html += description;
    html += '" width="120" height="120"></canvas>';
    html += temperature;
    html += '&deg;</h1>';
    html += '<h3 class="text-white mx-auto mt-2 mb-5">Saturday '
    html += current_hour;
    html += ':00</h3>';
    html += '</div>';
    html += '</div>';
    html += '<div class="container">';
    html += '<div class="table-responsive-sm">';
    html += '<table class="table table-borderless text-white">';
    html += '<thead>';
    html += '<tr>';
    html += '<th scope="col">Wind</th>';
    html += '<th scope="col">Humidity</th>';
    html += '<th scope="col">Pressure</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';
    html += '<tr>';
    html += '<td>SSE ';
    html += wind_speed;
    html += 'km/hr</td>';
    html += '<td>';
    html += humidity;
    html += '%</td>';
    html += '<td>';
    html += pressure;
    html += 'hPa</td>';
    html += '</tr></tbody></table></div></div>';
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
    html += '<td class="text-white" style="width:2%">Friday</td>'
    html += '<td class="text-white" style="width:2%"><canvas class="partly-cloudy-day" width="20" height="20"></canvas></td>'
    html += '<td class="text-white" style="width:2%">37</td>'
    html += '<td class="text-white-50" style="width:2%">28</td>'
    html += '</tr>'
    html += '<td class="text-white" style="width:2%">Saturday</td>'
    html += '<td class="text-white" style="width:2%"><canvas class="partly-cloudy-day" width="20" height="20"></canvas></td>'
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

app.get('/City', function (req, res) {

    res.send(today)
});