import { useEffect, useState } from 'react'
// Score x
// time x
// list of animals with count x
// input for email to get results (nodemailer)
// Back home

const Results = ({ time, seenList, setSeenList }) => {
  // console.log(time)
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

    const new_score =
      (1800 * seenList.length * Object.keys(seenCount).length) / 5

    setScore(new_score)
  }, [seenList, time])

  return (
    <div>
      <h1>Score: {score}</h1>
      <h3>Time: {formattedTime}</h3>
      {Object.keys(seenCount).map((animal, index) => (
        <p key={index}>
          {animal} x {seenCount[animal]}
        </p>
      ))}
    </div>
  )
}

export default Results
