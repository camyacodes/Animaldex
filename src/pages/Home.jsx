import { Link } from 'react-router-dom'
import Title from '../assets/animaldex_title.png'
// import Image from 'react-bootstrap/Image'
import OpenDex from '../components/Buttons/OpenDex/OpenDex.jsx'
import StartQuest from '../components/Buttons/StartQuest/StartQuest.jsx'
import './Home.css'
// import div from 'react-bootstrap/div'
// import div from 'react-bootstrap/div'
// import div from 'react-bootstrap/div'

const Home = () => {
  return (
    <div>
      <div>
        <img src={Title} height='auto' width='350' />
      </div>
      <div>
        <Link to={'./dex'}>
          <OpenDex />
        </Link>
      </div>
      <div>
        <Link to={'./startquest'}>
          <StartQuest />
        </Link>
      </div>
      <div>
        <div>1 of 1</div>
        <div>1 of 1</div>
      </div>
    </div>
  )
}

export default Home
