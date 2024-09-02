import { useEffect } from 'react'

const Timer = ({ isTimerActive, time, setTime }) => {
  useEffect(() => {
    let interval = null
    if (isTimerActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000) // Update every second
    } else if (!isTimerActive && time !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isTimerActive, time, setTime])

  const formatTime = () => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours}h ${minutes}m ${seconds}s`
  }

  return (
    <div>
      <h1>{formatTime()}</h1>
    </div>
  )
}

export default Timer
