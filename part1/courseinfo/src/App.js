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
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>

  )
}

const Header = props => <h1>{props.course}</h1>

const Content = props => {
  return (
    <>
      {props.parts.map(part => <Part key={part.name} part={part.name} exercises={part.exercises} />)}
    </>
  )
}

const Part = props => <p>{props.part} {props.exercises} </p>

const Total = props => <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>

export default App