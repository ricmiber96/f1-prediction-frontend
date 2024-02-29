import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
export default function Layout ({ children }) {
  return (
    <>
        <Header/>
        <main className='flex flex-col w-full h-screen '>
        <Outlet />
        </main>
    </>
  )
}
