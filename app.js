

const geoCity = require('./lugar/lugar')
const openWeather = require('./weather/weather')
const argv = require('yargs').option({
    direccion:{
        alias:'d',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;

//console.log(argv.direccion)
// geoCity.getLugarLatLng(argv.direccion)
//         .then(console.log)
//         .catch(err => console.log(err))

// openWeather.getWeather(-12.0431800,-77.0282400)
// .then(console.log)

const getWeatherByDirection = async (direction) => {
    try{
        const ubication = await geoCity.getLugarLatLng(direction);
        const weather = await openWeather.getWeather(ubication.lat,ubication.lng);
    
        return `El clima de ${direction} es de ${weather} °C`;
    }
    catch{
        return `No se encontro los datos para ${direction}`
    }
    
    
}

getWeatherByDirection(argv.direccion)
.then(console.log)

