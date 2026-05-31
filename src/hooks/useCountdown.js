import { useEffect, useState } from "react"

function calculateTimeLeft(targetDate) {
  const targetTime = new Date(targetDate).getTime()
  const currentTime = new Date().getTime()
  const difference = targetTime - currentTime

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true,
    }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isExpired: false,
  }
}

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(targetDate)
  )

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [targetDate])

  return timeLeft
}

export default useCountdown