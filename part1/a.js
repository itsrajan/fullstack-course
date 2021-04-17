// Introduction to React

import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

ReactDOM.render(<App />, document.getElementById('root'))

// infile app.js
const App = () => {
  const name = 'Childerooni'
  const age = 1139

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Rajan" age={5 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

// 
