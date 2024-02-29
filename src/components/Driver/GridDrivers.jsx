import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React, { useState } from 'react'
import DriverCard from './DriverCard'
import { drivers } from '@/data/drivers'

export default function GridDrivers (props) {
  const [driverList, setDriverList] = useState(drivers)
  const [people, setPeople] = useState([
    { id: 1, name: 'Pierre Gasly' },
    { id: 2, name: 'Max Verstappen' },
    { id: 3, name: 'Lewis Hamilton' },
    { id: 4, name: 'Valtteri Bottas' },
    { id: 5, name: 'Charles Leclerc' },
    { id: 6, name: 'Carlos Sainz' },
    { id: 7, name: 'Lando Norris' },
    { id: 8, name: 'Daniel Ricciardo' },
    { id: 9, name: 'Esteban Ocon' },
    { id: 10, name: 'Sebastian Vettel' },
    { id: 11, name: 'Lance Stroll' },
    { id: 12, name: 'Kimi Raikkonen' },
    { id: 13, name: 'Antonio Giovinazzi' },
    { id: 14, name: 'Mick Schumacher' },
    { id: 15, name: 'Nikita Mazepin' },
    { id: 16, name: 'Fernando Alonso' },
    { id: 17, name: 'Yuki Tsunoda' },
    { id: 18, name: 'Nicholas Latifi' }
  ])

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

  return (
    <div className='flex flex-col justify-center items-center mt-8 text-center'>
    <h2 className='text-4xl my-4'>Drivers</h2>
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
