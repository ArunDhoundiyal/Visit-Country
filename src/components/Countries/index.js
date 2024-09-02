import './index.css'

const Countries = ({eachCountryItem, passCountryId}) => {
  const {id, name, isVisited} = eachCountryItem
  const text = isVisited ? 'Visited' : 'Visit'
  const onClickVisitButton = () => {
    passCountryId(id)
  }
  return (
    <li className="country-button-name-card">
      <p>{name}</p>
      <div className="button-container">
        {isVisited ? (
          <p type="button" className="visited-button">
            {text}
          </p>
        ) : (
          <button
            type="button"
            className="visit-button"
            onClick={onClickVisitButton}
          >
            {text}
          </button>
        )}
      </div>
    </li>
  )
}
export default Countries
