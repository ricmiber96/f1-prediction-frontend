import React, { useRef } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import GoldMedalIcon from '../Icons/GoldMedalIcon'
import SilverMedalIcon from '../Icons/SilverMedalIcon'
import BronzeMedalIcon from '../Icons/BronzeMedalIcon'
import HelmetIcon from '../Icons/HelmetIcon'

export default function DriverCard ({ index, driver }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: driver.id })
  const cardStyle = {
    transform: CSS.Transform.toString(transform),
    transition
  }
  const CardIcon = (number) => {
    switch (number.index) {
      case 0:
        return <GoldMedalIcon />
      case 1:
        return <SilverMedalIcon />
      case 2:
        return <BronzeMedalIcon />
      default:
        return <HelmetIcon/>
    }
  }

  if (index === 0) {
    cardStyle.backgroundColor = '#FFD700'
  } else if (index === 1) {
    cardStyle.backgroundColor = '#C0C0C0'
  } else if (index === 2) {
    cardStyle.backgroundColor = '#CD7F32'
  }

  return (
    <div
    {...attributes}
    {...listeners}
    ref={setNodeRef}
    className='flex items-center justify-between flex-wrap w-full  p-4 shadow-md bg-white rounded-md mb-4'
    style={cardStyle}>
      <div className='flex items-center justify-start'>
      <CardIcon index={index}/>
      <img src={driver.imageDriver} alt={driver.name} className='w-16 h-16 rounded-full mx-4' />
      <div className='flex flex-row items-center content-center space-x-4 text-xl'>
        <p># {index + 1} </p>
        <p> {driver.name} {driver.surname}</p>
        <img src={driver.imageFlag} alt={driver.country} className='w-8 h-6 rounded-lg border-2 shadow-sm border-gray-300' />
      </div>
      </div>
      <div className='flex items-center justify-end'>
        <img src={driver.imageNumber} alt={driver.name} className='w-16 h-16 mx-4' />
      </div>
    </div>
  )
}
