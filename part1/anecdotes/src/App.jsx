/*
  Exercise 1.12 - 1.14: Anecdotes steps 1-3
  https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14
*/

import { useState } from "react";

const Heading = ({ text }) => <h2>{text}</h2>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Anecdote = ({ anecdote, votes }) => (
  <>
    <div>{anecdote}</div>
    <div>has {votes} vote(s)</div>
  </>
);

const MostVoted = ({ hasVotes, anecdote, votes }) => (
  <>
    <Heading text="Anecdote with Most Votes" />
    {!hasVotes ? (
      <p>No anecdotes have been voted on yet.</p>
    ) : (
      <Anecdote anecdote={anecdote} votes={votes} />
    )}
  </>
);

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNext = () => {
    let randomIdx;
    do {
      randomIdx = Math.floor(Math.random() * anecdotes.length);
    } while (randomIdx === selected);
    setSelected(randomIdx);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const maxVotes = Math.max(...votes);
  const topAnecdoteIndex = votes.indexOf(maxVotes);
  const hasVotes = maxVotes > 0;

  return (
    <div>
      <Heading text="Anecdote of the Day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleNext} text="next anecdote" />
      <MostVoted
        hasVotes={hasVotes}
        anecdote={anecdotes[topAnecdoteIndex]}
        votes={votes[topAnecdoteIndex]}
      />
    </div>
  );
};

export default App;
