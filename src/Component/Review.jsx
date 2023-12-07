import React from 'react';
import { questions } from './questions';
const Review = (props) => {
const ansArray = props.ans
  console.log(ansArray);



  return (
    <div>
      <h2>Review Component</h2>
      <ul>
     
{questions.map((e, index)=>(<div key={index}>
  <h3>{e.question}</h3>
  <h5>Correct answer - {e.correctAnswer}</h5>
  <h5>Your answer - {ansArray.length == 0 ||ansArray[index]=== null? "Not Answered":ansArray[index]}</h5>

  </div>
))}


      </ul>
      Review component
    </div>
  );
};

export default Review;
