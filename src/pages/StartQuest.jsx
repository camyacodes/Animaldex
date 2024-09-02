import { Link } from 'react-router-dom'

const StartQuest = ({ setIsTimerActive }) => {
  return (
    <div>
      <h1>Animaldex Quest</h1>
      <p>
        Get ready to embark on your animal-spotting adventure. Here’s how to get
        started:
      </p>
      <ol>
        <li>
          <strong>Start Your Quest:</strong> Tap the Start button to begin your
          journey. The timer will start ticking, so be sure to keep an eye out
          for animals!
        </li>
        <li>
          <strong>Search for Animals:</strong> Use the search bar to find
          animals in the Animaldex. Once you spot an animal, mark it as{' '}
          <q>Seen</q>
        </li>
        <li>
          <strong>Mark as Seen:</strong> When you spot an animal, tap{' '}
          <q>Mark as Seen</q> to log it in your quest. You can track all the
          animals you&apos;ve found during your quest.
        </li>
        <li>
          <strong>Finish Your Quest:</strong> When you&apos;re done, tap{' '}
          <q>Stop Quest</q> to end the timer and save your progress.
        </li>
      </ol>
      <h2>Rules</h2>
      <ul>
        <li>
          Be Safe: Always stay aware of your surroundings. Avoid dangerous areas
          and respect boundaries.
        </li>
        <li>
          {' '}
          Respect Wildlife: Observe animals from a distance. Do not approach,
          feed, or disturb them in any way.
        </li>
        <li>
          Leave No Trace: Take care of the environment. Don’t leave litter or
          damage habitats.
        </li>
        <li>
          {' '}
          Spot Only: Only mark animals you have truly spotted. Be honest and
          enjoy the thrill of the search!
        </li>
        <li>Have fun and see how many animals you can spot in each quest!</li>
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
