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

const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => <Part key={part.name} part={part.name} exercises={part.exercises} />)}
    </>
  )
}

const Part = ({ part, exercises }) => <p>{part} {exercises} </p>

const Total = ({ parts }) => <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>

export default App