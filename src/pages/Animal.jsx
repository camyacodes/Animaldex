import { getAnimalImage, getAnimalFacts } from '../services/animals_api'

const Animal = async() => {
    const test_animal =  { "file_name": "American_Robin.png", "name": "American Robin" }
    const image = getAnimalImage(test_animal.file_name)

    // useEffect(() => {
    //     const animalsWImages = animals_data.map((a) => {
    //       const image = getAnimalImage(a.file_name)
    //       return { ...a, image: image }
    //     })
    //     setAnimals(animalsWImages)
    //   }, [])

    const result = await getAnimalFacts(test_animal)

    console.log(result)
    // console.log(getAnimalFacts(test_animal))
    // console.log(getAnimalFacts(test_animal)[0])

    return (
        <img src={image} alt={test_animal.name} className='animal_image'></img>
        
    )
  }
  
  export default Animal