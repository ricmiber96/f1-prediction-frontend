import React from 'react'
import F1Logo from '../../assets/images/F1Logo.png'
import singUpImage from '../../assets/images/imgSignUp.jpg'
import { Link } from 'react-router-dom'

export default function SignUpForm (props) {
  return (
    <div className="h-full bg-gray-400 dark:bg-gray-900">
      <div className="mx-auto">
      <div className="flex justify-center px-6 py-8">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" style={{
            backgroundImage: `url(${singUpImage})`,
            backgroundSize: 'cover', // Ajusta el tamaño para cubrir completamente
            backgroundPosition: 'center',
            height: '90vh' // Ajusta la altura según sea necesario
          }}></div>
          <div className="w-full items-center lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
            <div className='flex flex-col items-center mt-6'>
              <img src={F1Logo}/>
              <h3 className="py-4 text-3xl text-center  font-bold text-gray-800 dark:text-white">F1 Predictions Game</h3>
              <h5 className='text-lg italic text-gray-400'>Create an Account!</h5>
            </div>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
              <div className='flex flex-col space-y-6'>
                <div className='text-start content-start'>
                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="username">Username</label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"/>
                </div>
                <div className='text-start content-start'>
                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="username">Email</label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"/>
                </div>
                <div className='text-start content-start'>
                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="username">Password</label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"/>
                </div>
                <div className='text-start content-start'>
                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="username">Confirm Password</label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"/>
                </div>
              </div>
              <div className="mb-6 text-center mt-8">
                <button
                className="w-2/3 px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                type="button">
                  Sign Up
                  </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <Link to={'/login'} className="inline-block text-sm text-red-500 dark:text-red-500 align-baseline hover:text-red-800">
                  Already have an account? Login!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
