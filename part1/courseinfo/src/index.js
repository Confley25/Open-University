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
    <p><Part1/></p>
    <p><Part2/></p>
    <p><Part3/></p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const aux = 0

  return (
    <div>
      <Header course={course} />

      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      
      <Total aux={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))