import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

import MainPage from "./components/Layout/MainPage";

import { Layout } from './components/Layout/Layout';
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layout />}/> 
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
    </Router>
  );
}

export default App;
