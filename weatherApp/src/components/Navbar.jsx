import { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import PropTypes from 'prop-types'


const Navbar = ({searchCountry, setSearchCountry,setData}) => {
 // const [searchCountry, setSearchCountry] = useState('')
   
  const handleChange = (event) => {
    setSearchCountry(event.target.value);
    
  };

  const handleSubmit = async(event) => {
      event.preventDefault();
      console.log('Search Country:', searchCountry);
      
      try {
          const response = await fetch('http://localhost:3000/weather', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ country: searchCountry })
          })
          
          const data = await response.json();
          
          console.log("Sucess",data);
          setData(data);
          console.log(data);
          // setSearchCountry(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
  }

 
  

  return (
    <>
         <NavbarContainer>
      <Logo src={logo} alt="YourLogo" />
      <SearchContainer>
        <SearchInput  type="text"
          placeholder="Search..."
          value={searchCountry}
          onChange={handleChange} />
        <SearchButton onClick={handleSubmit}>Search</SearchButton>
      </SearchContainer>
    </NavbarContainer>
    </>
  )
}
Navbar.propTypes = {
  searchCountry: PropTypes.string.isRequired,
  setSearchCountry: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired
};
export default Navbar

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f1f8;
  padding: 10px 20px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;