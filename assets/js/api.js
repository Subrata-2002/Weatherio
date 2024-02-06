

'use strict';

const api_key = "065be91e00464c3cc741d5ecdd6520fa";


export const fetchData = function (URL, callback)
{
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data))
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon){
         return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&units=metric`
    },
    reverseGeo(lat, lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5&units=metric`
    },

    /*
    query string== search query that is "london","new york"
    */
   
    geo(query){
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }

}