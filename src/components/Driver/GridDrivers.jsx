import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React, { useState } from 'react'
import DriverCard from './DriverCard'
import { drivers } from '@/data/drivers'
import { Button } from '../ui/button'

export default function GridDrivers (props) {
  const [driverList, setDriverList] = useState(drivers)

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (active.id !== over.id) {
      setDriverList((people) => {
        const oldIndex = people.findIndex((person) => person.id === active.id)
        const newIndex = people.findIndex((person) => person.id === over.id)
        const newPeople = [...people]
        newPeople.splice(oldIndex, 1)
        newPeople.splice(newIndex, 0, people[oldIndex])
        return newPeople
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('driver', driverList)
    localStorage.setItem('drivers', JSON.stringify(driverList))
  }

  return (
    <div className='flex flex-col justify-center items-center mt-8 text-center'>
    <div className='flex flex-1 w-4/6 justify-between'>
    <h2 className='text-4xl my-4'>Drivers</h2>
    <form className='flex flex-col items-center mt-4' onSubmit={handleSubmit} >
      <Button className='text-lg text-white space-x-6'>
        Send Prediction
      </Button>
      </form>
    </div>
    <div className='w-4/6'>
     <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={driverList} strategy={verticalListSortingStrategy}>
        {driverList.map((driver, index) => (
          <DriverCard key={driver.id} index={index} driver={driver} />
        ))}
      </SortableContext>
      </DndContext>
    </div>

    </div>
  )
}
