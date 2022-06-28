import React from 'react'
import { useGlobalContext } from '../context/context'

function Home() {
  const name = useGlobalContext();
  return (
    <div>Home
      {name}
    </div>
  )
}

export default Home