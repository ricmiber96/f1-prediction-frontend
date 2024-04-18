import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import Race from '@/pages/Race'
import CheckeredFlagIcon from '../Icons/CheckeredFlagIcon'
import ShowCounter from '../CountdownTimer/ShowCounter'
import CountdownTimer from '../CountdownTimer/CountdownTimer'

export default function RacesCard ({ race }) {
  const cardStyle = {
    background: `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${race.imgBackground})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    backdropFilter: 'blur(5px)'
  }
  const blurStyle = {
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(2px)'
  }

  console.log('race', race)

  return (
    <div style={cardStyle} className='flex flex-col bg-gray-300 m-2 px-6 rounded-lg shadow-lg max-w-[320px] w-[370px]'>
        <div style={blurStyle} className='-z-10 absolute w-full h-full rounded-md'></div>
        <div className='flex flex-col items-center px-4 py-6 w-full'>
        <div className='flex flex-row items-center content-center justify-center space-x-4 text-start'>
            <img src={race.flag} className='w-6 h-6 rounded-md'/>
            <h3 className='text-2xl font-bold'>{race.place}</h3>
        </div>
        <p>{race.circuit}</p>
        <div className='w-full flex flex-col items-center justify-end content-end'>
        <img className='p-4 rounded-md w-[180px]' src={race.imgCircuit}/>
        <div className='items-end'>
        <CountdownTimer id={race.id}/>
        </div>
        </div>
        </div>
    </div>
  )
}
