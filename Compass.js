class Compass {
    /**
     * Returns points of the compass in 16-wind compass rose format
     * 
     * @param {number} degree Compass degree value 0 to 360
     * @return {String} Points of compass 'N' 'E' 'W' 'S' 'NE' ...
     */
    getDirection(degree) {
        if (degree == 0 || degree == 360) {
            return 'N';
        } else if (degree > 0 && degree < 45) {
            return 'NNE';
        } else if (degree == 45) {
            return 'NE';
        } else if (degree > 45 && degree < 90) {
            return 'ENE';
        } else if (degree == 90) {
            return 'E';
        } else if (degree > 90 && degree < 135) {
            return 'ESE';
        } else if (degree == 135) {
            return 'SE';
        } else if (degree > 135 && degree < 180) {
            return 'SSE'
        } else if (degree == 180) {
            return 'S';
        } else if (degree > 180 && degree < 225) {
            return 'SSW';
        } else if (degree == 225) {
            return 'SW';
        } else if (degree > 225 && degree < 270) {
            return 'WSW';
        } else if (degree == 270) {
            return 'W';
        } else if (degree > 270 && degree < 315) {
            return 'WNW';
        } else if (degree == 315) {
            return 'NW';
        } else {
            return 'NNW';
        }
    }
}

module.exports = Compass;