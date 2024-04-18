import React from 'react'
import DateTimeDisplay from './DateTimeDisplay'

export default function ShowCounter ({ months, days, hours, minutes, seconds }) {
  return (
   <div className='flex flex-row space-x-2 text-sm'>
        <DateTimeDisplay value={months} type='Months' isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={days} type='Days' isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={hours} type='Hours' isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type='Minutes' isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type='Seconds' isDanger={false} />
   </div>
  )
}
