import { Link } from 'react-router-dom'

const DexItem = ({ name, image }) => {
  return (
    <div className='image_container'>
      <Link to={`/dex/${name}`} id>
        {' '}
        <img src={image} alt={name} className='animal_image'></img>
        <p>{name}</p>
      </Link>
    </div>
  )
}

export default DexItem
