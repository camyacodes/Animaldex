// import 'dotenv/config'
// import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'
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
    return await response.data
  } catch (error) {
    console.error(error)
  }
}

export const getAnimalImage = (file_name) => {
  const image = process.env.S3_BASE_URL + file_name
  return image
}

// export const listBucket = async () => {
//   const client = new S3Client({
//     region: 'us-east-2',
//     credentials: process.env.AWS_ACCESS_KEY_ID,
//   })
//   const input = {
//     Bucket: 'animaldexbucket',
//   }
//   const command = new ListObjectsV2Command(input)
//   const response = await client.send(command)
//   console.log(response)
// }
// listBucket()
