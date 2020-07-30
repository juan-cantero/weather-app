import axios from 'axios';

const getWeatherInfo = (lat, lon) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,current&units=metric&appid=b443ad9d18c27ed0ebaf97f30c928bde`
  );
};

export default getWeatherInfo;
