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
      setLoading(true);
      console.log(searchCountry);
      setLoading(false);
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
              <Heading>Weather Details for {searchCountry.city}</Heading>
              <WeatherContainer>
                  <p>Temperature : {searchCountry.temperature}°C</p>
                  <p>Feels like : {searchCountry.feelsLike}°C</p>
                  <p>Max Temperature : {searchCountry.maxTemp}°C</p>
                  <p>Minimum Temperature : {searchCountry.minTemp}°C</p>
                  <p>Description : {searchCountry.description}</p>
                  <p>Humidity : {searchCountry.humidity}</p>
                  <p>Wind : {searchCountry.windSpeed}</p>
                  <p>Country Code : {searchCountry.country}</p>
                  <p>City : {searchCountry.city}</p>
                  
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
