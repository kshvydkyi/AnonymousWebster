import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

import Header from "./components/Auth/Header/Header";
import Footer from "./components/Auth/Footer";
import MainPage from "./components/Layout/MainPage";



function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
