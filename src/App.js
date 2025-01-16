import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Nav from './components/Nav';
import User from './components/User';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <h1 className='text-2xl'>Social Media Task</h1>
        </div>
        <Nav/>
      </div>
      <Routes>
        <Route path='/admin' element={<Dashboard/>}/>
        <Route path='/' element={<User/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
