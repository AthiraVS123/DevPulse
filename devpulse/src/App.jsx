import './App.css'
import Login from './Pages/Login'

import { Routes,Route } from "react-router-dom";
import HomePage from './Pages/HomePage';

function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/home' element={<HomePage></HomePage>}/>
    </Routes>
  )
}

export default App;
