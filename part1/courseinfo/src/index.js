import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Part1 = (props) => {
  return(
    <div>
      <p>Fundamentals of React 10 exercises</p>
    </div>

    )
}

const Part2 = (props) => {
  return(
    <div>
      <p>Using props to pass data 7 exercises</p>
    </div>

    )
}

const Part3 = (props) => {
  return(
    <div>
      <p>State of a component 14 exercises</p>
    </div>

    )
}


const Content = (props) => {
  return(
    <div>
    <Part1/>
    <Part2/>
    <Part3/>
    </div>


    )
}


const Total = (props) => {
  return(
    <div>
      <p>Number of total exercises {props.aux}</p>
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
    }
  ]

  return (
    <div>
      <Header course={course} />

      <Content parts={parts}/>
      
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))