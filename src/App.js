import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Users } from './Pages/Users';
import {Home} from './Pages/Home'
import { Posts } from './Pages/Posts';
import { ModalComments } from './components/ModalComments';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about'></Route>
        <Route path='/posts' element={<Posts></Posts>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/comments' element={<ModalComments/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
