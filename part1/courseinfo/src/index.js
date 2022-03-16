import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}



const Content = (props) => {
  return(
    <div>
      {props.parts}
    </div>

    )
}


const Total = (props) => {
  return(
    <div>
      {props.parts}
    </div>



    )
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
    {
      tot: 'total number of exercises 31'
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts.map(value => value.name+ " " + value.exercises + " ")}/>
      <Total parts={parts.map(value => value.tot)}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))