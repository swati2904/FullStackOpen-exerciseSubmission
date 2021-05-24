import React from 'react'

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts:
      [{
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
  }

  const Header = (props) => {
    return (
      <h1> <i>{props.course.name}</i> </h1>
    )
  }

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part name={course.parts[0].name} exercises={course.parts[0].exercises} />
        <Part name={course.parts[1].name} exercises={course.parts[1].exercises} />
        <Part name={course.parts[2].name} exercises={course.parts[2].exercises} />
      </div>

    )
  }

  const Total = (props) => {
    return (
      <p>Total exercises <b>{props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</b></p>
    )
  }


  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
