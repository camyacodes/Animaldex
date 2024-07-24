import Title from '../assets/animaldex_title.png'
import Image from 'react-bootstrap/Image'
import OpenDex from '../components/Buttons/OpenDex/OpenDex.jsx'
import StartQuest from '../components/Buttons/StartQuest/StartQuest.jsx'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Image src={Title} thumbnail />
      <div className='homepage-buttons'>
        <OpenDex/>
        <StartQuest/>
      </div>
    </div>
  )
}

export default Home
