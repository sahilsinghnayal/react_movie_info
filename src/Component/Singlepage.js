import React from 'react'
import {useParams} from"react-router-dom"

function Singlepage() {
  const {id}=useParams()
  
  return (
    <div>Singlepage {id}</div>
  )
}

export default Singlepage