// @ts-nocheck
import React, { useEffect, useReducer, useState } from 'react';

//components
import getWeatherInfo from './api/OpenWeather';
import MainDisplayer from './components/main-displayer/MainDisplayer';
import getCityName from './api/ReverseGeoLocalization';
import WeeklyTemperaturesDisplayer from './components/weekly-temperatures-displayer/WeeklyTemperatures';

//sytles
import './App.css';

const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  error: '',
  info: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        info: action.payload,
        error: '',
      };
    case FETCH_ERROR:
      return {
        loading: false,
        info: {},
        error: 'Something went wrong!',
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [city, setCity] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        getWeatherInfo(position.coords.latitude, position.coords.longitude)
          .then((response) => {
            dispatch({ type: FETCH_SUCCESS, payload: response.data });
            getCityName(response.data.lat, response.data.lon)
              .then((response) => setCity(response.data))
              .catch((error) => console.log(error));
          })

          .catch((response) =>
            dispatch({ type: FETCH_ERROR, payload: response.data })
          );
      },
      (error) => {
        console.log(error.message);
      }
    );
  }, []);

  if (state.loading) {
    return <div className="loader">loading...</div>;
  }
  return (
    <div className="App">
      <header />
      <MainDisplayer current={state.info.daily[0]} city={city} />
      <WeeklyTemperaturesDisplayer daily={state.info.daily} />
    </div>
  );
};

export default App;
