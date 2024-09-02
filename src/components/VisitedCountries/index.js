import './index.css'

const VisitedCountries = ({eachCountryItem, passRemoveId}) => {
  const {id, name, isVisited, imageUrl} = eachCountryItem
  const onClickRemoveButton = () => {
    passRemoveId(id)
  }
  return (
    <li className="display-country-card">
      {isVisited ? (
        <>
          <img className="country-img" src={imageUrl} alt="country" />

          <div className="remove-button-name-country">
            <p>{name}</p>
            <button
              className="remove-button"
              type="button"
              onClick={onClickRemoveButton}
            >
              Remove
            </button>
          </div>
        </>
      ) : null}
    </li>
  )
}

export default VisitedCountries
