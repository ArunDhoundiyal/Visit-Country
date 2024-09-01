import './index.css'

const Countries = ({eachCountryItem}) => {
  const {name} = eachCountryItem
  return (
    <li className="country-button-name-card">
      <p>{name}</p>
      <div className="button-container">
        <button type="button" className="visit-button">
          Visit
        </button>
      </div>
    </li>
  )
}
export default Countries
