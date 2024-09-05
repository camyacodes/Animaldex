import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import Timer from '../components/Timer'

import {
  listBucketObjects,
  getAnimalImage,
  // getAnimalFacts,
} from '../services/animals_api'

const Quest = ({
  isTimerActive,
  setIsTimerActive,
  time,
  setTime,
  seenList,
  setSeenList,
}) => {
  const [options, setOptions] = useState([
    { label: 'loading...', value: 'loading...' },
  ])
  const [selectedOption, setSelectedOption] = useState(null)
  // const [seenList, setSeenList] = useState([])
  const [animalImage, setAnimalImage] = useState('')
  // const [animalFacts, setAnimalFacts] = useState('')

  useEffect(() => {
    const getOptions = async () => {
      try {
        const animalList = await listBucketObjects()

        const options = animalList.map((a) => {
          const name = a.split('.')[0].replaceAll('_', ' ')
          return { label: name, value: name, image: a }
        })
        setOptions(options)
      } catch (error) {
        console.log(error)
      }
    }
    getOptions()
  }, [])

  useEffect(() => {
    const selectedDetails = async () => {
      try {
        if (selectedOption) {
          const animalImageURL = await getAnimalImage(selectedOption.image)
          //   const animalFactPoints = await getAnimalFacts(selectedOption.label)

          setAnimalImage(animalImageURL)
          //   setAnimalFacts(animalFactPoints)
        } else return
      } catch (error) {
        console.log(error)
      }
    }

    selectedDetails()
  }, [selectedOption])

  const MarkAsSeen = () => {
    const newList = seenList.concat(selectedOption.label)
    setSeenList(newList)
  }

  return (
    <div>
      <Timer isTimerActive={isTimerActive} time={time} setTime={setTime} />
      <Link
        to='/results'
        onClick={() => {
          setIsTimerActive(false)
        }}
      >
        <button>End Quest</button>
      </Link>
      {selectedOption ? (
        <div>
          <h2>{selectedOption.label}</h2>
          <img src={animalImage} style={{ height: '300px', width: 'auto' }} />
          <h3>
            {/* Scientific Name: {animalFacts.taxonomy?.scientific_name || 'N/A'} */}
          </h3>
          <button onClick={MarkAsSeen}>Mark As Seen</button>
        </div>
      ) : (
        <h2>Search for an animal</h2>
      )}
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  )
}

export default Quest
