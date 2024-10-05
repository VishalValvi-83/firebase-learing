import React, { useEffect } from 'react'
import { Navbar } from '../components/navbar'
import { useNavigate } from 'react-router-dom'
import ProductTable from '../components/protable'

function Home() {
  const [isLogged, setIsLogged] = React.useState(false)
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('User'))
  console.log(user)

  useEffect(() => {
    if (user && window.location.pathname !== "/user-login") {
      setIsLogged(true)
    }
    else if (!user && window.location.pathname !== "/user-login") {
      setIsLogged(false)
      navigate("/user-login")
    }

  }, [])

  return (
    <div>

      <Navbar />
      <div className="mb-5"><h1 className='text-2xl font-sans font-medium text-red-600 text-center bg-yellow-200'>Welcome to the Home</h1>
        {isLogged ? (
          <p className='font-serif font-semibold text-center text-blue-800'>Welcome back, {user.user.email}! We're glad you're here.</p>
        ) : (
          <p className='font-serif font-semibold text-center text-blue-800 shadow-md' >Welcome! Please login to access the application.</p>
        )}</div>
      <ProductTable />
    </div>
  )
}

export default Home
