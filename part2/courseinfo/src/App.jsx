/*
Exercise 2.1 - 2.5 - Course information step 6-9 and seperate module step 10
https://fullstackopen.com/en/part2/rendering_a_collection_modules#exercises-2-1-2-5
*/

import React from 'react'
import Course from './components/Course'

const App = ({ courses }) => (
  <div>
    {courses.map(course => (
      <Course key={course.id} course={course} />
    ))}
  </div>
)

export default App
