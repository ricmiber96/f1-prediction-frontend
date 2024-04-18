import React from 'react'
import { grandPrix } from '@/data/grandPrix'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import RacesCard from './RacesCard'

export default function GridRaces (props) {
  return (
    <div className='grid grid-cols-4 mt-40'>
        {
            grandPrix.map((race, i) => {
              return (
                   <RacesCard key={i} race={race} />
              )
            })
        }
    </div>
  )
}
