import { useState } from 'react'
import Sidebar from './components/navbar/vertical'
import Dashboard from './pages/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className="flex-1 p-10 w-1/2">
        <Dashboard />
      </div>
    </div>
  )
}

export default App
