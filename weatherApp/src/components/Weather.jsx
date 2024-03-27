import  { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';

import PropTypes from 'prop-types'

const Weather = ({ data, setData, searchCountry }) => {
  //  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://omweather.onrender.com/weather?country=${searchCountry}`);
       // setData(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [searchCountry, setData]);
console.log(data);
return (
  <>
  <div>
    {loading ? (
      <p>Loading...</p>
    ) : (
      <div>
          <Container>
              <Heading>Weather Details for {data.city}</Heading>
              <WeatherContainer>
                  <p>Temperature : {data.temperature}°C</p>
                  <p>Feels like : {data.feelsLike}°C</p>
                  <p>Max Temperature : {data.maxTemp}°C</p>
                  <p>Minimum Temperature : {data.minTemp}°C</p>
                  <p>Description : {data.description}</p>
                  <p>Humidity : {data.humidity}</p>
                  <p>Wind : {data.windSpeed}</p>
                  <p>Country Code : {data.country}</p>
                  <p>City : {data.city}</p>
                  
              </WeatherContainer>
          </Container>

       
       
      </div>
    )}
  </div>

  </>
)
}

Weather.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func,
  searchCountry: PropTypes.string,
};

export default Weather

const Container = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin-left: 212px;
    margin-right: 212px;
    margin-top: 20px;
    @media (max-width: 768px) {
      margin-left: 12px;
    margin-right: 12px;
    }
`

const Heading = styled.h1`
    text-align: center;
    `

const WeatherContainer = styled.div`
    margin-left:50px;
    p{
        font-size: 20px;
        margin-bottom: 10px;
        margin-top: 10px;
        text-align: left;
        font-weight: 500;
        color: black;
        font-family: 'Poppins', sans-serif;

    }
`
