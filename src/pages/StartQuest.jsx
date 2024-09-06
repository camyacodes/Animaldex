import { Link } from 'react-router-dom'

const StartQuest = ({ setIsTimerActive }) => {
  return (
    <div className='centered-content'>
      <h1>AnimalDex Quest</h1>
      <h2>
        Get ready to embark on your animal-spotting adventure. <br />
        Here’s how to get started:
      </h2>
      <ol>
        <li>Tap Start to begin and track time.</li>
        <li>Use the search bar and mark sightings.</li>
        <li>Tap &ldquo;Mark as Seen&rdquo; to log animals.</li>
        <li>Tap &ldquo;Stop Quest&rdquo; to save progress.</li>
      </ol>

      <h2>Rules</h2>
      <ul>
        <li>Stay aware and avoid dangerous areas.</li>
        <li>Observe wildlife from afar, don’t disturb or feed.</li>
        <li>Don’t litter or harm natural habitats.</li>
        <li>Only mark animals you truly see.</li>
        <li>Enjoy spotting as many animals as possible!</li>
      </ul>

      <Link
        to='/quest'
        onClick={() => {
          setIsTimerActive(true)
        }}
      >
        <button>Start Quest</button>
      </Link>
    </div>
  )
}

export default StartQuest
