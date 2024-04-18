import { useCountdown } from '@/hooks/useCountDown'
import React from 'react'
import ShowCounter from './ShowCounter'
import { Link } from 'react-router-dom'
import CheckeredFlagIcon from '../Icons/CheckeredFlagIcon'
import { Button } from '../ui/button'

export default function CountdownTimer ({ id }) {
  const futureDate = new Date('2024-04-17')
  const [months, remainingDays, remainingHours, remainingMinutes, remainingSeconds] = useCountdown(futureDate)

  if ((months < 1 && (remainingDays <= 7 && remainingDays >= 0))) {
    return (
      <Link to={`/races/${id}`}>
      <Button className='text-lg text-white space-x-6'>
          <CheckeredFlagIcon className='w-8 h-8'/>
          Entry
          </Button>
      </Link>
    )
  }

  if (months + remainingDays + remainingHours + remainingMinutes + remainingSeconds <= 0) {
    return (
      <p className='text-lg text-white'>
        Ended reace
      </p>
    )
  }

  return (

    <div className='flex flex-row mt-4'>
        <ShowCounter months={months} days={remainingDays} hours={remainingHours} minutes={remainingMinutes} seconds={remainingSeconds}/>
    </div>

  )
}
