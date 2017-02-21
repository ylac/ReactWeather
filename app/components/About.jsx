var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center'>About</h1>
      <p>This is a basic weather app built on
        <a href="https://facebook.github.io/react"> React</a>.
        It uses weather data from
        <a href='http://openweathermap.org/'> OpenWeatherMap </a>
        and the source code is stored on
        <a href='https://github.com/ylac/ReactWeather'> Github</a>.
      </p>
    </div>
  );
}

module.exports = About;
