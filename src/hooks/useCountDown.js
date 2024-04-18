import { useEffect, useState } from 'react'

const useCountdown = (futureDate) => {
  const futureDateMs = new Date(futureDate).getTime()

  const [countDown, setCountDown] = useState()

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(futureDateMs - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [futureDateMs])

  return getReturnValues(countDown)
}

const getReturnValues = (countDown) => {
  // calculate time left
  const seconds = Math.floor((countDown / 1000))
  const minutes = Math.floor((seconds / 60))
  const hours = Math.floor((minutes / 60))
  const days = Math.floor((hours / 24))
  const months = Math.floor((days / 30))

  const remainingDays = days % 30
  const remainingHours = hours % 24
  const remainingMinutes = minutes % 60
  const remainingSeconds = seconds % 60

  return [months, remainingDays, remainingHours, remainingMinutes, remainingSeconds]
}

export { useCountdown }
