import { useState } from "react"
// import { Container, Row, Col } from 'react-bootstrap'
// import Title from '../assets/animaldex_title.png'
import DexItem from "../components/DexItem"
// import Search from '../components/Search'
// import { getAnimalImage, getAnimalFacts } from '../services/animals_api'
import animals_data from "../../animals.json"

// const robin = { file_name: 'American_Robin.png', name: 'American Robin' }
// const robin = { file_name: 'American_Robin.png', name: 'American Robin' }
// console.log(animals_data)

const Dex = () => {
  const [searchValue, setSearchValue] = useState("")

  const [animals, setAnimals] = useState(animals_data)
  console.log(animals)


  const handleSearch = (event) => {
    const animalNames = ["the", "first", "dog"]
    event.preventDefault() // use to prevent page refresh
    // console.log(event.nativeEvent.data)
    setSearchValue(event.target.value)
    console.log(animalNames.filter((name) => name.includes(searchValue)))
  }

  return (
    <div>
      <div>
        <label htmlFor="animal_searched">Search:</label>
        <input
          type="text"
          id="name"
          name="animal_searched"
          value={searchValue}
          placeholder="Search animals.."
          onChange={handleSearch}
        />
      </div>
      <div className="dex_container">
        {animals.map((animal, index) => (
          <DexItem
            key={index}
            name={animal.name}
            file_name={animal.file_name}
          />
        ))}
      </div>
    </div>
  )
}

export default Dex
