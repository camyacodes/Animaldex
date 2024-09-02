// import 'dotenv/config'
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'
import axios from 'axios'

const client = new S3Client({
  region: 'us-east-2',
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
  },
})

export const getAnimalFacts = async (animal) => {
  const options = {
    method: 'GET',
    url: 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals',
    params: { name: animal },
    headers: {
      'x-rapidapi-key': process.env.ANIMAL_API_KEY,
      'x-rapidapi-host': 'animals-by-api-ninjas.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request(options)
    return response.data[0]
  } catch (error) {
    console.error('Error fetching animal facts: ', error)
  }
}

export const getAnimalImage = (file_name) => {
  const image = process.env.S3_BASE_URL + file_name
  return image
}

export const listBucketObjects = async () => {
  const command = new ListObjectsV2Command({
    Bucket: 'animaldexbucket',
  })

  try {
    let isTruncated = true

    let contentsList

    while (isTruncated) {
      const { Contents, IsTruncated, NextContinuationToken } =
        await client.send(command)
      contentsList = Contents.map((c) => `${c.Key}`)
      // contents += contentsList
      isTruncated = IsTruncated
      command.input.ContinuationToken = NextContinuationToken
      return contentsList
    }
  } catch (err) {
    console.error(err)
  }
}
