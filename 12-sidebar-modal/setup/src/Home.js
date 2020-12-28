import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext()
  console.log(data)
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn'>show modal</button>
    </main>
  )
}

export default Home
