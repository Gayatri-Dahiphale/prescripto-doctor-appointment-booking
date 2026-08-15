import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-4 m-auto border border-gray-250 shadow-lg p-5 rounded-lg min-w-[340px] sm:min-w-96 text-zinc-600 text-sm '>

        <p className=' text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>

        <p>
          Please {state === 'Sign Up' ? "sign up" : "Login"} to book appointment
        </p>
        {
          state === "Sign Up" && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 w-full p-2 mt-1 rounded-md'
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        }


        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 w-full p-2 mt-1 rounded-md'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 w-full p-2 mt-1 rounded-md'
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className='border border-zinc-300 w-full p-4 mt-1 bg-blue-600 text-white rounded-md'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up"
            ? <p>Alreaady have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p>Create an new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login