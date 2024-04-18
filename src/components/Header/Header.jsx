import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import LogoIcon from '../Icons/LogoIcon'
import iconLogo from '@/components/Icons/f1logo.svg'

export default function Header (props) {
  const navBarStyle = {
    backgroundColor: '#e10600'
  }
  return (
    <header style={navBarStyle} className='sticky top-0 z-50  text-white py-4 w-full'>
      <div className='container mx-auto flex item-center justify-between'>
      <Link to={'/'}>
        <div className='flex items-center space-x-4'>
            <img src={iconLogo} alt='logo' className='w-12 h-12' />
          <span className='font-semibold text-lg'>
          F1 Predictions
          </span>
        </div>
        </Link>
          <nav className='space-x-4'>
            <Link to={'/races'}>Races</Link>
            <Link to={'/leaderboard'}>LeaderBoard</Link>
            <Link style={{ marginRight: '10px' }} to="/drivers">Drivers</Link>
            <Link style={{ marginRight: '10px' }} to="/teams">Teams</Link>
            <Button style={{ marginRight: '20px' }}>Sign Out</Button>
          </nav>
        </div>
    </header>
  )
}
