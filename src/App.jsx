import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [loginsignup, setloginsignup] = useState(false)

  return (
    <div className='relative'>
      <div className='hidden lg:block relative'>
        <Navbar setloginsignup={setloginsignup} />
      </div>
      <HomePage />

      {/* Login Modal with AnimatePresence */}
      <AnimatePresence>
        {loginsignup && (
          <div className='bg-black bg-opacity-50 h-[100vh] z-20 w-full fixed top-0 left-0 flex items-center justify-center'>
            <LoginPage setloginsignup={setloginsignup} />
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

