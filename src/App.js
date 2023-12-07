import './App.css';
import QuizApp  from './Component/QuizApp';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
<>
<BrowserRouter>

<Routes>

<Route path='/' element={<QuizApp/>} />

</Routes>
</BrowserRouter>
</>
  )
}

export default App;
