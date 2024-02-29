import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import LogoIcon from '../Icons/LogoIcon'

export default function Header (props) {
  const navBarStyle = {
    backgroundColor: '#1C1917',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '10px',
    padding: '10px',
    color: 'white'
  }
  return (
    <header style={navBarStyle} className='sticky top-0 z-50  justify-end flex-row-reverse space-x-6 mb-4'>
        <Link to={'/'}>
          <span className='w-1/2'>
            <img src={<LogoIcon/>} alt='logo' className='w-10 h-10' />
          <LogoIcon/>
          F1 Predictions
          </span>
          </Link>
        <Link to={'/leaderboard'}>LeaderBoard</Link>
        <Link style={{ marginRight: '10px' }} to="/drivers">Drivers</Link>
        <Link style={{ marginRight: '10px' }} to="/teams">Teams</Link>
        <Button style={{ marginRight: '20px' }}>Sign Out</Button>
    </header>
  )
}
