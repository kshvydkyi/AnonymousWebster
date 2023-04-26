import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

import MainPage from "./components/Layout/MainPage";
import { Layout } from './components/Layout/Layout';



function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layout />}> 
          <Route path='/' element={<MainPage/>}/>
          </Route>
        </Routes>

    </Router>
  );
}

export default App;
