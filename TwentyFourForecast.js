class TwentyFourForecast {
    constructor() {
        this.item = [];
        this.date = new Date();
        this.current_hour = this.date.getHours();

        var city = 'Bangkok';
        var temperature = 28;
        var humidity = 76;
        var pressure = 1012;
        var wind_speed = 10;
        var wind_deg = 157.5;
        var description = 'cloudy';

        for (let index = 0; index < 24; index++) {
            var hour = this.current_hour + index;
            if (hour >= 24) {
                hour -= 24;
            }

            if (index == 0) {
                this.item[0] = '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">';
                this.item[0] += '<div class="carousel-inner">';
                //carousel-item #1
                this.item[0] += '<div class="carousel-item active">';
                this.item[0] += '<div class="container d-flex h-20 align-items-center">';
                this.item[0] += '<div class=" mx-auto text-center">';
                this.item[0] += '<h2 class="text-white mx-auto" style="margin-top:50%;">';
                this.item[0] += city;
                this.item[0] += '</h2>';
                this.item[0] += '<h3 class="text-white mx-auto mt-2 mb-5">';
                this.item[0] += description.charAt(0).toUpperCase() + description.slice(1);
                this.item[0] += '</h3>';
                this.item[0] += '<h1 class="text-white mx-auto mt-5 mb-5">';
                this.item[0] += '<canvas class="';
                this.item[0] += description;
                this.item[0] += '" width="120" height="120"></canvas>';
                this.item[0] += temperature;
                this.item[0] += '&deg;</h1>';
                this.item[0] += '<h3 class="text-white mx-auto mt-2 mb-5">Saturday '
                this.item[0] += hour;
                this.item[0] += ':00</h3>';
                this.item[0] += '</div>';
                this.item[0] += '</div>';
                this.item[0] += '</div>';
            } else {
                this.item[index] = '<div class="carousel-item">';
                this.item[index] += '<div class="container d-flex h-20 align-items-center">';
                this.item[index] += '<div class=" mx-auto text-center">';
                this.item[index] += '<h2 class="text-white mx-auto" style="margin-top:50%;">';
                this.item[index] += city;
                this.item[index] += '</h2>';
                this.item[index] += '<h3 class="text-white mx-auto mt-2 mb-5">';
                this.item[index] += description.charAt(0).toUpperCase() + description.slice(1);
                this.item[index] += '</h3>';
                this.item[index] += '<h1 class="text-white mx-auto mt-5 mb-5">';
                this.item[index] += '<canvas class="';
                this.item[index] += description;
                this.item[index] += '" width="120" height="120"></canvas>';
                this.item[index] += temperature;
                this.item[index] += '&deg;</h1>';
                this.item[index] += '<h3 class="text-white mx-auto mt-2 mb-5">Saturday '
                this.item[index] += hour;
                this.item[index] += ':00</h3>';
                this.item[index] += '</div>';
                this.item[index] += '</div>';
                this.item[index] += '</div>';
            }
        }
    }

    getItemAt(index) {
        return this.item[index];
    }

    getAll() {
        var list = '';
        for (let index = 0; index < this.item.length; index++) {
            list += this.item[index];
        }
        return list;
    }
}

module.exports = TwentyFourForecast;