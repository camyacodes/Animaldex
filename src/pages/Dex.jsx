import { useEffect, useState } from 'react'
// import Fuse from 'fuse.js'
// import { Container, Row, Col } from 'react-bootstrap'
// import Title from '../assets/animaldex_title.png'
import DexItem from '../components/DexItem'
// import { Search } from '../components/Search'
import { getAnimalImage } from '../services/animals_api'
import animals_data from '../../animals.json'

// const robin = { file_name: 'American_Robin.png', name: 'American Robin' }
// const robin = { file_name: 'American_Robin.png', name: 'American Robin' }
// console.log(animals_data)

const Dex = () => {
  const [searchValue, setSearchValue] = useState('')
  const [showAll, setShowAll] = useState(true)

  const [animals, setAnimals] = useState()
  // let animalsToShow

  useEffect(() => {
    const animalsWImages = animals_data.map((a) => {
      const image = getAnimalImage(a.file_name)
      return { ...a, image: image }
    })
    setAnimals(animalsWImages)
  }, [])
  // console.log(animals)
  // const fuse = new Fuse(animals, fuseOptions)
  const handleSearch = (event) => {
    event.preventDefault() // use to prevent page refresh
    setShowAll(false)
    setSearchValue(event.target.value)
    // console.log(animals.filter((a) => a.name.includes(searchValue)))
    // setAnimals(newAnimals)
  }

  const animalsToShow = showAll
    ? animals
    : animals.filter((a) =>
        a.name.toLowerCase().includes(searchValue.toLowerCase())
      )

  // console.log(animalsToShow)
  return (
    <div id='dex_page'>
      <div id='search_bar'>
        <label htmlFor='animal_searched'>Search:</label>
        <input
          type='text'
          id='name'
          name='animal_searched'
          value={searchValue}
          placeholder='Search animals..'
          onChange={handleSearch}
        />
        {/* <Search /> */}
      </div>
      <div className='dex_container'>
        {animalsToShow ? (
          animalsToShow.map((animal, index) => (
            <DexItem key={index} name={animal.name} image={animal.image} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Dex
