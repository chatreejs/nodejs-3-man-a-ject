var icons = new Skycons({
    "stroke": 1,
    "color": "white"
}),
    list = [
        "clear-day", "clear-night", "partly-cloudy-day",
        "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
        "fog"
    ],
    i;
for (i = list.length; i--;) {
    var weatherType = list[i],
        elements = document.getElementsByClassName(weatherType);
    for (e = elements.length; e--;) {
        icons.set(elements[e], weatherType);
    }
}
icons.play();