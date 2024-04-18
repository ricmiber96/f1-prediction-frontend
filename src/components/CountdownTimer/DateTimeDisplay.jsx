import React from 'react'

export default function DateTimeDisplay ({ value, type, isDanger }) {
  return (
    <div>

        <div className={isDanger ? 'text-red-500' : ''}>
            <span>{value}</span>
        </div>
        <h1>{type}</h1>
    </div>
  )
}
