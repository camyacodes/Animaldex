// import { Container, Row, Col } from 'react-bootstrap'
// import Title from '../assets/animaldex_title.png'
// import DexItem from '../components/DexItem'
import { getAnimalImage, getAnimalFacts } from '../services/animals_api'

const robin = { file_name: 'American_Robin.png', name: 'American Robin' }

// const image = getAnimalImage(robin)

const Dex = () => {
  //   getAnimalFacts({ file_name: 'American_Robin.png', name: 'American Robin' })
  return <img src={getAnimalImage(robin)} />
}

export default Dex
