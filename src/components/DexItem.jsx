const DexItem = ({ name, image }) => {
  return (
    <div className='image_container'>
      <img src={image} alt={name} className='animal_image'></img>
      <p>{name}</p>
    </div>
  )
}

export default DexItem
