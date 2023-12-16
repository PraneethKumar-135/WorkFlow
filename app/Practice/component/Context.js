import React, { useContext } from 'react'
import { context } from '../page'

const Context = () => {

  let value = useContext(context)

  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
}

export default Context