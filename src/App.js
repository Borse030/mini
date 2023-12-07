import { useState } from 'react';
import './App.css';
import QuizApp  from './Component/QuizApp';
import Review from './Component/Review';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { questions } from './Component/questions';

function App() {
  const[ans,setAns]=useState([])
  const[question ,setQuestion]=useState(questions)
  const GK=[ 
    {
      question: 'What is the capital of Japan?',
      options: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
      correctAnswer: 'Tokyo',
    },
    {
      question: 'Who is the current President of the United States?',
      options: ['Joe Biden', 'Donald Trump', 'Barack Obama', 'George Bush'],
      correctAnswer: 'Joe Biden',
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the currency of India?',
      options: ['Rupee', 'Yen', 'Dollar', 'Euro'],
      correctAnswer: 'Rupee',
    },
    {
      question: 'Who developed the theory of relativity?',
      options: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Stephen Hawking'],
      correctAnswer: 'Albert Einstein',
    },
    {
      question: 'Which ocean is the largest?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correctAnswer: 'Pacific Ocean',
    },
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'London', 'Paris', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['J.K. Rowling', 'Harper Lee', 'George Orwell', 'Jane Austen'],
      correctAnswer: 'Harper Lee',
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    {
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
      correctAnswer: 'Canberra',
    },
  ]

const history=[
  {
    question: 'Who was the first President of the United States?',
    options: ['John Adams', 'Thomas Jefferson', 'George Washington', 'Abraham Lincoln'],
    correctAnswer: 'George Washington',
  },
  {
    question: 'In which year did World War II end?',
    options: ['1943', '1945', '1950', '1940'],
    correctAnswer: '1945',
  },
  {
    question: 'Who was the queen of ancient Egypt known for her beauty?',
    options: ['Nefertiti', 'Hatshepsut', 'Cleopatra', 'Isis'],
    correctAnswer: 'Cleopatra',
  },
  {
    question: 'Which famous explorer reached the Americas in 1492?',
    options: ['Marco Polo', 'Christopher Columbus', 'Vasco da Gama', 'Ferdinand Magellan'],
    correctAnswer: 'Christopher Columbus',
  },
  {
    question: 'What event marked the beginning of the French Revolution?',
    options: ['The Storming of the Bastille', 'The Battle of Waterloo', 'The Reign of Terror', 'The Glorious Revolution'],
    correctAnswer: 'The Storming of the Bastille',
  },
  {
    question: 'Who was the first woman to win a Nobel Prize?',
    options: ['Marie Curie', 'Rosalind Franklin', 'Ada Lovelace', 'Jane Goodall'],
    correctAnswer: 'Marie Curie',
  },
  {
    question: 'Which ancient civilization built the Great Pyramid of Giza?',
    options: ['Mesopotamia', 'Greece', 'Rome', 'Egypt'],
    correctAnswer: 'Egypt',
  },
  {
    question: 'Who was the leader of the Soviet Union during World War II?',
    options: ['Vladimir Lenin', 'Joseph Stalin', 'Nikita Khrushchev', 'Mikhail Gorbachev'],
    correctAnswer: 'Joseph Stalin',
  },
  {
    question: 'Which war was fought between the North and South in the United States?',
    options: ['World War I', 'Vietnam War', 'Civil War', 'Cold War'],
    correctAnswer: 'Civil War',
  },
  {
    question: 'Who wrote the "I Have a Dream" speech?',
    options: ['Malcolm X', 'Martin Luther King Jr.', 'Nelson Mandela', 'Mahatma Gandhi'],
    correctAnswer: 'Martin Luther King Jr.',
  },
]

const math =[
  {
    question: 'What is the square root of 64?',
    options: ['6', '8', '10', '12'],
    correctAnswer: '8',
  },
  {
    question: 'If a triangle has angles of 30°, 60°, and 90°, what type of triangle is it?',
    options: ['Equilateral', 'Isosceles', 'Scalene', 'Right-angled'],
    correctAnswer: 'Right-angled',
  },
  {
    question: 'What is the value of π (pi) to two decimal places?',
    options: ['3.14', '3.16', '3.18', '3.20'],
    correctAnswer: '3.14',
  },
  {
    question: 'Solve for x: 2x + 5 = 15',
    options: ['5', '7', '8', '10'],
    correctAnswer: '5',
  },
  {
    question: 'What is the area of a rectangle with length 8 units and width 5 units?',
    options: ['13 square units', '30 square units', '40 square units', '45 square units'],
    correctAnswer: '40 square units',
  },
  {
    question: 'If a = 4 and b = 3, what is the value of a² + b²?',
    options: ['7', '16', '25', '49'],
    correctAnswer: '25',
  },
  {
    question: 'What is the next prime number after 17?',
    options: ['19', '21', '23', '27'],
    correctAnswer: '19',
  },
  {
    question: 'If a circle has a radius of 6 units, what is its circumference? (Use π = 3.14)',
    options: ['12.56 units', '18.84 units', '31.42 units', '37.68 units'],
    correctAnswer: '37.68 units',
  },
  {
    question: 'What is the value of 2³ (2 raised to the power of 3)?',
    options: ['4', '6', '8', '12'],
    correctAnswer: '8',
  },
  {
    question: 'Simplify: 2(x + 3) - 4',
    options: ['2x - 1', '2x - 2', '2x + 1', '2x + 2'],
    correctAnswer: '2x + 2',
  },
]

const HandleHist=()=>{
  setQuestion(history)
}
const handelmath=()=>{
  setQuestion(math)
}
const handelgk=()=>{
  setQuestion(GK)
}

  return (
<>
<BrowserRouter>

<Routes>
<Route path='/' element={<QuizApp question={question} setAns={setAns}/>} />
<Route path='/review' element={<Review ans={ans}/>} />
</Routes>
<button onClick={HandleHist}>History</button>
<button onClick={handelgk}>GK</button>
<button onClick={handelmath}>Math</button>

</BrowserRouter>
</>
  )
}

export default App;
