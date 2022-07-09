import { useState } from 'react'
import SearchBox from './components/SearchBox'
import './index.css'

document.body.style='background:#048182'
function App() {


  return (
    <>
    <div className='banner'>
    </div>
    
      <div className='container'>
        <SearchBox />
      </div>
      </>
  )
}

export default App
