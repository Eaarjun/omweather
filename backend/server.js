const express = require('express');
const cors = require('cors')
var bodyParser = require('body-parser')
const https = require('https')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/weather', (req, res) => {
    // Define an object to store weather data
    const weatherObject = {
    temperature: null,
    feelsLike: null,
    maxTemp: null,
    minTemp: null,
    description: null,
    humidity: null,
    windSpeed: null,
    country:null,
    city: null
    // You can add more properties as needed
};
    const  {country}  = req.body;
    console.log(country);
    const api = 'fa01cf400eeee77460aa1fc5c43694fd'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + 'Bangalore' + '&appid=' + api + '&units=metric';
    https.get(url, (response) => {
    response.on('data', (data) => {
        console.log(data);
        const weatherData = JSON.parse(data);
        console.log(weatherData);
       // Update the weatherObject with the retrieved data
    weatherObject.temperature = weatherData.main.temp;
    weatherObject.feelsLike = weatherData.main.feels_like;
    weatherObject.maxTemp = weatherData.main.temp_max;
    weatherObject.minTemp = weatherData.main.temp_min;
    weatherObject.description = weatherData.weather[0].description;
    weatherObject.humidity = weatherData.main.humidity;
    weatherObject.windSpeed = weatherData.wind.speed; 
    weatherObject.country = weatherData.sys.country;
    weatherObject.city = weatherData.name;
    res.send(weatherObject);
})
})
})

// app.post('/weather', async (req, res) => {

//     const api = 'fa01cf400eeee77460aa1fc5c43694fd'
//     console.log(req.body);
//     const  {country}  = req.body;
//     console.log(country);
    
//     try {
//         const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q= + ${country} + &appid=${api}&units=metric`);
    
//         const weatherData = await weatherResponse.json();
//         res.json(weatherData);
//         console.log(weatherResponse);
//         console.log(weatherData);
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         res.status(500).json({ error: 'Failed to fetch weather data' });
//     }
    
// });



app.post('/weather', async (req, res) => {
// Define an object to store weather data
const weatherObject = {
    temperature: null,
    feelsLike: null,
    maxTemp: null,
    minTemp: null,
    description: null,
    humidity: null,
    windSpeed: null,
    country:null,
    city: null
    // You can add more properties as needed
};
    const api = 'fa01cf400eeee77460aa1fc5c43694fd'
    console.log(req.body);
    const  {country}  = req.body;
    console.log(country);
    
    // try {
    //     const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q= + ${country} + &appid=${api}&units=metric`);
    
    //     const weatherData = await weatherResponse.json();
    //     res.json(weatherData);
    //     console.log(weatherResponse);
    //     console.log(weatherData);
    // } catch (error) {
    //     console.error('Error fetching weather data:', error);
    //     res.status(500).json({ error: 'Failed to fetch weather data' });
    // }

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + `${country}` + '&appid=' + api + '&units=metric';
    https.get(url, (response) => {
    response.on('data', (data) => {
        console.log(data);
        const weatherData = JSON.parse(data);
        console.log(weatherData);
       // Update the weatherObject with the retrieved data
    weatherObject.temperature = weatherData.main.temp;
    weatherObject.feelsLike = weatherData.main.feels_like;
    weatherObject.maxTemp = weatherData.main.temp_max;
    weatherObject.minTemp = weatherData.main.temp_min;
    weatherObject.description = weatherData.weather[0].description;
    weatherObject.humidity = weatherData.main.humidity;
    weatherObject.windSpeed = weatherData.wind.speed; 
    weatherObject.country = weatherData.sys.country;
    weatherObject.city = weatherData.name;
    res.send(weatherObject);
})
    
});


})