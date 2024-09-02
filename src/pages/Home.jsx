import { Link } from 'react-router-dom'
import Title from '../assets/animaldex_title.png'
// import Image from 'react-bootstrap/Image'
import OpenDex from '../components/Buttons/OpenDex/OpenDex.jsx'
import StartQuest from '../components/Buttons/StartQuest/StartQuest.jsx'
import './Home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Home = () => {
  return (
    <Container>
      <Row>
        <img src={Title} height='auto' width='350' />
      </Row>
      <Row>
        <Link to={'./dex'}>
          <OpenDex />
        </Link>
      </Row>
      <Row>
        <Link to={'./startquest'}>
          <StartQuest />
        </Link>
      </Row>
    </Container>
  )
}

export default Home
