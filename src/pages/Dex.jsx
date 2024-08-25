import { useEffect, useState } from 'react'
// import Title from '../assets/animaldex_title.png'
import DexItem from '../components/DexItem'
import { getAnimalImage } from '../services/animals_api'
import animals_data from '../../animals.json'

const Dex = () => {
  const [searchValue, setSearchValue] = useState('')
  const [showAll, setShowAll] = useState(true)

  const [animals, setAnimals] = useState()

  useEffect(() => {
    const animalsWImages = animals_data.map((a) => {
      const image = getAnimalImage(a.file_name)
      return { ...a, image: image }
    })
    setAnimals(animalsWImages)
  }, [])

  const handleSearch = (event) => {
    event.preventDefault() // use to prevent page refresh
    setShowAll(false)
    setSearchValue(event.target.value)
  }

  const animalsToShow = showAll
    ? animals
    : animals.filter((a) =>
        a.name.toLowerCase().includes(searchValue.toLowerCase())
      )

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
