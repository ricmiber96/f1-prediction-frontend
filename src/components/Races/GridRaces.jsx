import React from 'react'
import { grandPrix } from '@/data/grandPrix'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export default function GridRaces (props) {
  return (
    <div className='grid grid-cols-4 mt-40'>
        {
            grandPrix.map((race, i) => {
              return (
                    <div key={i} className='bg-gray-300 p-2 m-2 flex flex-col px-2 py-4'>
                        {race.place}

                            <Link to={`/races/race/${i}`}>
                            <Button className='text-lg'>
                                Entry
                                </Button>
                            </Link>

                    </div>
              )
            })
        }
    </div>
  )
}
