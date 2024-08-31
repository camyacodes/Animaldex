import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Title from '../assets/animaldex_title.png'
import ReturnHome from '../components/Buttons/ReturnHome/ReturnHome.jsx'
import DexItem from '../components/DexItem'
import { getAnimalImage, listBucketObjects } from '../services/animals_api'
// import animals_data from '../../animals.json'

const Dex = () => {
  const [searchValue, setSearchValue] = useState('')
  const [showAll, setShowAll] = useState(true)

  const [animals, setAnimals] = useState()

  useEffect(() => {
    const s3Animals = async () => {
      try {
        const animalData = await listBucketObjects()
        // console.log(animalData)
        const animalsWImages = animalData.map((a) => {
          const image = getAnimalImage(a)
          const name = a.split('.')[0].replaceAll('_', ' ')
          return { name: name, image: image }
        })
        setAnimals(animalsWImages)
      } catch (error) {
        console.log(error.message)
      }
    }
    s3Animals()
    // console.log(animalData)
    // const animalsWImages = animalData.map((a) => {
    //   const image = getAnimalImage(a)
    //   return { ...a, image: image }
    // })
    // setAnimals(animalsWImages)
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

      // comment2
  return (
    <div id='dex_page'>
        <div>
          <Link to={'../'}>
            <ReturnHome />
          </Link>
        </div>
        
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
