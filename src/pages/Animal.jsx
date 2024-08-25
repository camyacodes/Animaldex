import { useState, useEffect } from 'react'
import { getAnimalImage, getAnimalFacts } from '../services/animals_api'

const Animal = () => {
  const [animalFacts, setAnimalFacts] = useState([{}])
  const test_animal = {
    file_name: 'American_Robin.png',
    name: 'American Robin',
  }
  const image = getAnimalImage(test_animal.file_name)

  useEffect(() => {
    getAnimalFacts({
      file_name: 'American_Robin.png',
      name: 'American Robin',
    }).then((facts) => setAnimalFacts(facts))
  }, [])

  console.log(animalFacts[0])
  // scientific name animalFacts[0].taxonomy.scientific_name
  // common name .name
  // most distinctive feature .charateristics.most_distinctive_feature
  // biggest threat .characteristics.biggest_threat

  return (
    <div>
      <img src={image} alt={test_animal.name} className='animal_image'></img>
    </div>
  )
}

export default Animal
