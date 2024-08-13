// import 'dotenv/config'
import axios from 'axios'

export const getAnimalFacts = async (animal) => {
  const options = {
    method: 'GET',
    url: 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals',
    params: { name: animal.name },
    headers: {
      'x-rapidapi-key': process.env.ANIMAL_API_KEY,
      'x-rapidapi-host': 'animals-by-api-ninjas.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request(options)
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

export const getAnimalImage = (animal) => {
  const image = process.env.S3_BASE_URL + animal.file_name
  console.log(image)
  return image
}
