import { useEffect, useState } from 'react'
import { TestEmail } from '../components/TestEmail'
import ReturnHome from '../components/Buttons/ReturnHome/ReturnHome'
import { Link } from 'react-router-dom'

const Results = ({ time, seenList }) => {
  const [seenCount, setSeenCount] = useState({})
  const [formattedTime, setFormattedTime] = useState('')
  const [score, setScore] = useState(0)

  useEffect(() => {
    const counts = {}
    if (seenList.length != 0) {
      seenList.forEach((a) => (counts[a] = (counts[a] || 0) + 1))
    }
    setSeenCount(counts)

    const formatTime = () => {
      const hours = Math.floor(time / 3600)
      const minutes = Math.floor((time % 3600) / 60)
      const seconds = time % 60
      const Time = `${hours}h ${minutes}m ${seconds}s`
      setFormattedTime(Time)
    }
    formatTime()

    const new_score = Math.round(
      seenList.length * 40 + // Base score for animals seen
        Object.keys(seenCount).length * 70 + // Bonus for unique animals seen
        time * 0.75 // Increment score based on time
    )

    setScore(new_score)
  }, [seenList, time])

  return (
    <div>
      <h1>Results</h1>
      <h2>Score: {score}</h2>
      <h2>Time: {formattedTime}</h2>
      {Object.keys(seenCount).map((animal, index) => (
        <p key={index}>
          {animal} x {seenCount[animal]}
        </p>
      ))}
      <TestEmail time={formattedTime} score={score} animals={seenCount} />
      <Link to={'/'}>
        <ReturnHome />
      </Link>
    </div>
  )
}

export default Results
