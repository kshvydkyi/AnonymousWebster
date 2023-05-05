import '../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import MainPage from "./Layout/MainPage";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ConfirmEmail from "./Auth/ConfirmEmail";
import ResetPassword from "./Auth/ResetPassword";
import ResetPasswordWT from "./Auth/ResetPasswordWT";
import { NotFound } from './ErrorPages/NotFound';
import { ServerError } from './ErrorPages/ServerError';
import { AccesDenied } from './ErrorPages/AccesDenied';
import RequreAuth from './Auth/RequreAuth';
import { UpdateProfile } from './UserPages/UpdateProfile';
import { UpdateAvatar } from './UserPages/UpdateAvatar';
import { CreateProject } from './Project/CreateProject';
import CssBaseline from '@mui/material/CssBaseline';
function App() {
  if (!localStorage.getItem('autorized')) {
    localStorage.setItem(
      'autorized',
      JSON.stringify({ currentUser: 'guest' })
    );
  }
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
<ThemeProvider theme={darkTheme}>
{/* <CssBaseline /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='confirm-email/:token' element={<ConfirmEmail />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='reset-password/:token' element={<ResetPasswordWT />} />
          <Route path='*' element={<NotFound />} />
          <Route path='500' element={<ServerError />} />
          <Route path='403' element={<AccesDenied />} />

          <Route element={<RequreAuth allowedRoles={['user', 'admin']} />} >
            <Route path="update-profile" element={<UpdateProfile />} />
            <Route path="update-avatar" element={<UpdateAvatar />} />

            <Route path="create-project" element={<CreateProject />} />
          </Route>

        </Route>
      </Routes>
      </ThemeProvider>
  );
}

export default App;
