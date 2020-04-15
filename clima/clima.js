const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=75fa17986dd85598147a250aaf554f26&units=metric`)
    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}