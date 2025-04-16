/*
Exercise 2.16 - 2.17: Phonebook steps 11-12
https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-16-2-17
*/

import './Notification.css'

const Notification = ({ message }) => {
  if (!message) return null

  return (
    <div className={`notification ${message.type === 'error' ? 'error' : ''}`}>
      {message.text}
    </div>
  )
}

export default Notification
