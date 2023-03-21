import './index.css'

const DestinationItem = props => {
  const {eachItem} = props
  const {id, name, imgUrl} = eachItem
  return (
    <li>
      <div>
        <img src={imgUrl} alt={name} className="image" />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
