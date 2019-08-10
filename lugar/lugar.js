

const axios = require('axios');


//funcion
const getLugarLatLng = async (direccion)=>{

    const encodeUlr = encodeURI(direccion)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: {'x-rapidapi-key': 'd677a5d886msh5750af9051389f4p166cd7jsnb0f134503d28'}
      });
    
    const lugares = await instance.get()
    
    if (lugares.data.Results.length == 0){
        throw new Error (`No existe informacion para ${direccion}`)
    };

    const dir = lugares.data.Results[0]
    const nombre = dir.name;
    const lat = dir.lat;
    const lng = dir.lon;

     return {
         nombre,
         lat,
         lng
     }   
}

module.exports={
    getLugarLatLng
}

