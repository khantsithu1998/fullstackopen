const App = () => {
  const course = 'Half Stack application development'
  const parts ={
    part1 : {
      name : 'Fundamentals of React',
      exercises : 10
    },
    part2 : {
      name : 'Using props to pass data',
      exercises : 7
    },
    part3 : {
      name : 'State of a component',
      exercises : 14
    }
  }

  const total = Object.values(parts).reduce((sum, part) => sum + part.exercises, 0)

  return (
    <>
      <Header course={course} />
      <Content parts={parts}/>
      <Total total={total}/>
    </>

  )
}

const Header = (props) => (<h1>{props.course}</h1>)

const Content = (props) => {
  const { part1 , part2 , part3} = props.parts
  
  return (
    <>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </>
  )
}

const Part = (props) => (<p>{props.part} {props.exercises} </p>)

const Total = (props) => (<p>Number of exercises {props.total}</p>)

export default App