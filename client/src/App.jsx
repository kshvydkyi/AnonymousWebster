import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import MainPage from "./components/Layout/MainPage";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import ConfirmEmail from "./components/Auth/ConfirmEmail";
import ResetPassword from "./components/Auth/ResetPassword";
import ResetPasswordWT from "./components/Auth/ResetPasswordWT";
import { NotFound } from './components/ErrorPages/NotFound';
import { ServerError } from './components/ErrorPages/ServerError';
import { AccesDenied } from './components/ErrorPages/AccesDenied';

function App() {
  if (!localStorage.getItem('autorized')) {
		localStorage.setItem(
			'autorized',
			JSON.stringify({ currentUser: 'guest' })
		);
	}
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/confirm-email/:token' element={<ConfirmEmail/>} />
            <Route path='/reset-password' element={<ResetPassword/>} />
            <Route path='/reset-password/:token' element={<ResetPasswordWT/>} />
            <Route path='/*' element={<NotFound />} />
            <Route path='500' element={<ServerError/>}/>
            <Route path='403' element={<AccesDenied/>}/>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
