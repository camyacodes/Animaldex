import { useEffect, useState } from 'react'
// Score
// time
// list of animals with count
// input for email to get results (nodemailer)
// Back home

const Results = ({ time, seenList, setSeenList }) => {
  // console.log(time)
  const [seenCount, setSeenCount] = useState({})

  useEffect(() => {
    const counts = {}
    if (seenList.length != 0) {
      seenList.forEach((a) => (counts[a] = (counts[a] || 0) + 1))
    }
    setSeenCount(counts)
  }, [seenList])

  return (
    <div>
      {Object.keys(seenCount).map((animal, index) => (
        <p key={index}>
          {animal} x {seenCount[animal]}
        </p>
      ))}
    </div>
  )
}

export default Results
