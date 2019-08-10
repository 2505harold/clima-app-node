const axios = require('axios');


//create function for obtain the weather

const getWeather = async (lat,lng)=>{
    const weathers = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c5a2cf19ab74033cdea45028ea0a46df&units=metric`)

    return weathers.data.main.temp
}

module.exports={
    getWeather
}
