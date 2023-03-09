
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Skill from './components/Skill/Skill';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/skill' element={<Skill/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
