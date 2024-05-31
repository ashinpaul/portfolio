import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from "../src/components/Home";
import About from './components/About.jsx';
import Third from './components/Third';
import PageTwo from './components/PageTwo.jsx';
import Resume from './components/resume.jsx';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='third' element={<Third/>}/>
        <Route path='/about' element={<><About/><Resume/></>}/>
      </Routes>   
    </div>
  );
}

export default App;
