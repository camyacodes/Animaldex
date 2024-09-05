import { useEffect, useState } from 'react'
import { TestEmail } from '../components/TestEmail'
// Score x
// time x
// list of animals with count x
// input for email to get results (nodemailer)
// Back home

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
      (time * seenList.length * Object.keys(seenCount).length) / 5 +
        seenList.length * 15
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
    </div>
  )
}

export default Results
