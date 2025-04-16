/* 
  Exercise 1.1 - 1.3: Course Information, steps 1 - 3
  https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2
*/

const Header = (props) => {
  console.log('Header props', props)
  return (
    <h1>
      {props.course.name}
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
  const parts = props.course.parts
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log('Total props', props)
  const parts = props.course.parts
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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