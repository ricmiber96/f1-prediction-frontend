import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default function LeaderBoard (props) {
  const [predictions, setPredictions] = useState([])

  return (
    <div>
        <h1 className='text-4xl text-center mt-8'>Leaderboard</h1>
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Position</TableHead>
        <TableHead className="text-left">Name</TableHead>
        <TableHead className="text-right">Points</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">#01</TableCell>
        <TableCell className="text-left">player1</TableCell>
        <TableCell className="text-right">590</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  </div>
  )
}
