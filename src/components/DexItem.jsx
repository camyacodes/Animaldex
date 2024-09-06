import { Link } from 'react-router-dom'

const DexItem = ({ name, image }) => {
  return (
    <div className='image_container'>
      <Link to={`/dex/${name}`} className='dex_name_link'>
        {' '}
        <img src={image} alt={name} className='animal_image'></img>
        <p className='animal_names'>{name}</p>
      </Link>
    </div>
  )
}

export default DexItem
