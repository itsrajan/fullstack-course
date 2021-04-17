// Exercise 1

import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default App

// Exercise 2

import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'hehe',
    'hola',
    'words words words',
    'bouelakdhalwek',
    'hungarian turkeys'
  ]
   
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {anecdotes[selected]}
    </div>
  )
}

export default App
