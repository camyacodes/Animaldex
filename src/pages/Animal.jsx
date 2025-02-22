import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAnimalImage, getAnimalFacts } from '../services/animals_api'
import Button from 'react-bootstrap/Button'

const Animal = () => {
  const { animal } = useParams()
  const [animalFacts, setAnimalFacts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  // const test_animal = {
  //   file_name: 'American_Robin.png',
  //   name: 'American Robin',
  // }
  const file_name = animal.replaceAll(' ', '_').concat('.png')
  // console.log(file_name)
  const image = getAnimalImage(file_name)

  // console.log(animal)

  useEffect(() => {
    const fetchAnimalFacts = async () => {
      try {
        const facts = await getAnimalFacts(animal)
        setAnimalFacts(facts)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchAnimalFacts()
  }, [])

  // console.log(animalFacts)
  // scientific name animalFacts[0].taxonomy.scientific_name
  // common name .name
  // most distinctive feature .charateristics.most_distinctive_feature
  // biggest threat .characteristics.biggest_threat

  if (isLoading) return <div>...Loading</div>
  if (error) return <div>Error: {error}</div>
  return (
    <div>
      <div>
        <Link to={'/dex'}>
          <Button style={{ marginTop: '30px' }}>Back to Dex</Button>
        </Link>
      </div>
      <img
        src={image}
        alt={animalFacts.name}
        className='animal_image'
        style={{ height: 'auto', width: '50%' }}
      ></img>
      {animalFacts ? (
        <div style={{ paddingRight: '15px', paddingLeft: '15px' }}>
          <h2
            style={{
              fontSize: '3em',
              marginBottom: '0px',
              textDecoration: 'underline',
            }}
          >
            {animalFacts.name}
          </h2>
          <p>
            <strong>Scientific Name:</strong>{' '}
            {animalFacts.taxonomy?.scientific_name || 'N/A'}
          </p>
          <p>
            <strong>Most Distinctive Feature: </strong>
            {animalFacts.characteristics?.most_distinctive_feature || 'N/A'}
          </p>
          <p>
            <strong>Biggest Threat: </strong>
            {animalFacts.characteristics?.biggest_threat || 'N/A'}
          </p>
          <p>
            <strong>Locations: </strong>
            {animalFacts.locations?.join(', ') || 'N/A'}
          </p>
        </div>
      ) : (
        <div>No animal facts available</div>
      )}
    </div>
  )
}

export default Animal
