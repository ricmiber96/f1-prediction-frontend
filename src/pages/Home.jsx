import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home (props) {
  return (
    <div className='flex flex-row items-center content-center w-full h-full justify-center space-around space-x-6'>
      <Button className='text-lg'>
            <Link to={'/races'}>
                Drivers Mode
            </Link>
        </Button>
      <Button className='text-lg'>Teams Mode</Button>
    </div>
  )
}
