import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import F1Logo from '../../assets/images/F1Logo.png'
import authService from '../../services/auth'
import { useAuth } from '@/contexts/AuthContext'

export default function LoginForm (props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberUser, setRememberUser] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(email, password, rememberUser)
      await login(email, password, rememberUser)
      setEmail('')
      setPassword('')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-screen h-screen flex bg-gray-500 justify-center items-center'>
      <div className='grid gap-4 w-11/12 sm:w-11/12 md:w-2/3 lg:w-2/6'>
        <div className='bg-gradient-to-r  from-red-500 to-gray-400 m-4 rounded-[26px] shadow-lg'>
          <div className='border-transparent rounded-[20px]  shadow-lg text-center p-8 bg-white xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2'>
          <div className='flex flex-col items-center mt-6'>
              <img src={F1Logo}/>
              <h3 className="py-4 text-3xl text-center  font-bold text-gray-800 dark:text-white">F1 Predictions Game</h3>
              <h5 className='text-lg italic text-gray-400'>Login</h5>
            </div>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
            <div className='text-start content-start'>
              <label className='block mb-2 text-sm font-bold text-black' htmlFor='username'>Username</label>
              <input
                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Username'/>
            </div>
            <div className='text-start content-start'>
              <label className='block mb-2 text-sm font-bold text-black' htmlFor='username'>Password</label>
              <input
                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='username'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'/>
            <div className='w-full grid justify-items-end'>
              <label className='text-gray-400 leading-tight'>
                <input
                  className='mr-1 text-gray-400'
                  type="checkbox"
                  checked={rememberUser}
                  onChange={(e) => {
                    setRememberUser(e.target.checked)
                  }}
                />
                Remember me
              </label>
              </div>
            </div>

            <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                    <div className="h-px w-full bg-slate-200"></div>
                    <p className='text-gray-400'>OR</p>
                    <div className="h-px w-full bg-slate-200"></div>
                </div>

                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-[18px] w-[18px] "/>
                    Login with Google
                </button>
            <div className='text-center'>
              <button
                className='w-2/3 px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline'
                type='submit'>
                Login
              </button>
            </div>
            <hr className="mb-6 border-t" />
              <div className="text-center">
              Don&apos;t have an account?
                <Link to={'/signup'} className="ml-1 text-red-500 dark:text-red-500 align-baseline hover:text-red-800">
                  Sign up
                </Link>
              </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}
