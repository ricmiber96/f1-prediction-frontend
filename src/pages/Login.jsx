import { Link } from 'react-router-dom'
import React, { useState } from 'react'

export default function Login (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Username:', username)
    console.log('Password:', password)
  }

  return (
        <div>
        <div>

          </div>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <button type="submit">Login</button>
          </form>
          <Link to='/signup'>Sign Up</Link>
        </div>
  )
}
