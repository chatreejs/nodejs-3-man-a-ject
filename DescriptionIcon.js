class DescriptionIcon {
    getIcon(description, hour) {
        var des_icon;
        if (description == 'Clear' || description == 'clear sky') {
            if (hour >= 6 && hour <= 18) {
                des_icon = 'clear-day';
            } else {
                des_icon = 'clear-night';
            }
        } else if (description == 'Clouds' || description == 'overcast clouds') {
            des_icon = 'cloudy';
        } else if (description == 'few clouds' || description == 'scattered clouds') {
            if (hour >= 6 && hour <= 18) {
                des_icon = 'partly-cloudy-day';
            } else {
                des_icon = 'partly-cloudy-night';
            }
        } else if (description == 'light rain' || description == 'moderate rain') {
            des_icon = 'rain';
        }

        return des_icon;
    }
}

module.exports = DescriptionIcon;