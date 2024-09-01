import Countries from '../Countries'
import './index.css'

const Home = ({initialCountriesList}) => (
  <div className="bg-container">
    <h1 className="country-heading">Countries</h1>
    <ul className="unordered-list-country-card-container">
      {initialCountriesList.map(eachCountry => (
        <Countries key={eachCountry.id} eachCountryItem={eachCountry} />
      ))}
    </ul>
  </div>
)
export default Home
