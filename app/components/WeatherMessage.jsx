var React = require('react');

var WeatherMessage = ({location, temp}) => {
    return (
      <h4>It is {temp} degrees Celsius in {location}.</h4>
    )
};

module.exports = WeatherMessage;
