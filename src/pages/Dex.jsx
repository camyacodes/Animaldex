// import { Container, Row, Col } from 'react-bootstrap'
// import Title from '../assets/animaldex_title.png'
import DexItem from "../components/DexItem"
import { getAnimalImage, getAnimalFacts } from "../services/animals_api"
import animals_data from "../../animals.json"

const robin = { file_name: "American_Robin.png", name: "American Robin" }
// const robin = { file_name: 'American_Robin.png', name: 'American Robin' }
// console.log(animals_data)

const Dex = () => {
  return (
    <>
      <DexItem name={robin.name} file_name={robin.file_name} />
    </>
  )
}

export default Dex
