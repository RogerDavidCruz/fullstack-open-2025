/*
  Exercise 1.6 - 1.11: Unicafe steps 1-6
  https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14
*/

import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, counter }) => (
  <tr>
    <td>{text}</td>
    <td>{counter}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine text="good" counter={good} />
        <StatisticLine text="neutral" counter={neutral} />
        <StatisticLine text="bad" counter={bad} />
        <StatisticLine text="all" counter={total} />
        <StatisticLine text="average" counter={average.toFixed(1)} />
        <StatisticLine text="positive" counter={`${positive.toFixed(1)} %`} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header title="give feedback" />
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />

      <Header title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
