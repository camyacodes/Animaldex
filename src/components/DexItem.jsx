import { getAnimalImage } from "../services/animals_api"

const DexItem = ({ name, file_name }) => {
  // console.log(animal)
  // console.log(name)
  const image = getAnimalImage(file_name)
  // console.log(image)

  return (
    <div className="image_container">
      <img src={image} alt={name} className="animal_image"></img>
      <p>{name}</p>
    </div>
  )
}

export default DexItem
