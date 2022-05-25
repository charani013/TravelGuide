import './index.css'

const ListTravel = props => {
  const {travelItems} = props
  const {imageUrl, description, name} = travelItems

  return (
    <li className="list-travel">
      <img className="image-class" src={imageUrl} alt={name} />
      <h1 className="travel-list-heading">{name}</h1>
      <p className="travel-paragraph">{description}</p>
    </li>
  )
}
export default ListTravel
