import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Auth/Header";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Header/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
