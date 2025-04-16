/* 
  Exercise 1.1 - 1.2: Course Information, step 1 & 2
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
  Exercise 1.3: Course Information, step 3
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
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log('Total props', props)
  const total = props.part1.exercises + props.part2.exercises + props.part3.exercises
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App