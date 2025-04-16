/* 
  Exercise 1.1 - 1.3: Course Information, steps 1 - 3
  https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2
*/

const Header = (props) => {
  console.log('Header props', props)
  return (
    <h1>
      {props.course}
    </h1>
  )
}

/* 
  Exercise 1.4: Course Information, step 4
  https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2
*/

const Part = (props) => {
  console.log('Part props', props)
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  console.log('Content props', props)
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log('Total props', props)
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return <p>Number of exercises {total}</p>
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
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App