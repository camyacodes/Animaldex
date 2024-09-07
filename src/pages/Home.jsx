import { Link } from 'react-router-dom'
import Title from '../assets/animaldex_title.png'
import OpenDex from '../components/Buttons/OpenDex/OpenDex.jsx'
import StartQuest from '../components/Buttons/StartQuest/StartQuest.jsx'
import './Home.css'

import QuestSS from '../assets/quest_ss.png'
import DexSS from '../assets/dex_ss.png'
import AnimalSS from '../assets/animal_ss.png'

const Home = () => {
  return (
    <div className='home_box'>
      <div>
        <img src={Title} height='auto' width='75%' />
      </div>
      <div>
        <Link to={'./dex'}>
          <OpenDex />
        </Link>
      </div>
      <div style={{ marginBottom: '30px' }}>
        <Link to={'./startquest'}>
          <StartQuest />
        </Link>
      </div>
      <div className='container'>
        <div className='item'>
          Discover the wild! Search through dozens of real-life animals, just
          like a Pokédex, but for the creatures you can spot in your backyard or
          on a nature hike! See what they look like, learn cool facts, and
          become an animal expert in no time!
        </div>
        <div className='item'>
          <img src={DexSS} />
          <img src={AnimalSS} />
        </div>

        <div className='item'>
          Take the ultimate animal-spotting challenge! Step outside, start your
          quest, and see how many animals you can find. Time your adventure,
          mark the species you’ve spotted, and rack up points. Can you catch
          them all... in real life?
        </div>
        <div className='item'>
          {' '}
          <img src={QuestSS} />
        </div>
      </div>
    </div>
  )
}

export default Home
