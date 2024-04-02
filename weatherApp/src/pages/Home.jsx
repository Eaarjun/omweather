import{ useState} from 'react'
import Navbar from '../components/Navbar'
import Weather from '../components/Weather'

const Home = () => {
  const [data, setData] = useState(null);
  const [searchCountry, setSearchCountry] = useState('')
  return (
    <>
        {/* Displaying Navbar component */}
        <Navbar   searchCountry={searchCountry} setSearchCountry={setSearchCountry} setData={setData} />

        <Weather  data={data}  searchCountry={searchCountry}  setSearchCountry={setSearchCountry}/>
    </>
  )
}

export default Home
