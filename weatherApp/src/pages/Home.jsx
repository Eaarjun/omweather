import{ useState} from 'react'
import Navbar from '../components/Navbar'
import Weather from '../components/Weather'

const Home = () => {
  const [data, setData] = useState(null);
  const [searchCountry, setSearchCountry] = useState('')
  return (
    <>
        {/* Displaying Navbar component */}
        <Navbar   searchCountry={searchCountry} setData={setData} setSearchCountry={setSearchCountry}/>

        <Weather  data={data}  searchCountry={searchCountry}  />
    </>
  )
}

export default Home