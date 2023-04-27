import React, {  useRef, useState, useEffect  } from 'react';
import {Body, BoxEl, TextFieldEl, ButtonEl, ErrWarning} from '../../styles/RegisterStyle'
import axios from '../../api/axios';
import { CircularProgress } from '@mui/material';
import {LOGIN_URL} from '../../api/routes'
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const errRef = useRef();
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate(); 
    const { setAuth } = useAuth();
    const handleSubmit = async (e) => {
        setErrMsg('');
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ login: login, password: password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response);
            // console.log(response?.data.status, response?.data?.values);
            const accessToken = response?.data?.values?.values?.token;
            const role = response?.data?.values?.values?.userData?.title;
            const userId = response?.data?.values?.values?.userData?.id;
            // setAuth({ login, accessToken, role, userId});
            // console.log(userId)
            localStorage.setItem('autorized', JSON.stringify({login, accessToken, role, userId}))
            setLogin('');
            setPassword('');
            setLoading(false);
            navigate('/');
            
        }
        catch (err) {
            setLoading(false);
            console.log(err)
            if (!err?.response) {
                setErrMsg('Сервер спить');
            }
            else if (err?.response?.data?.status === 500 || err?.response?.data?.status === 404) {
                setErrMsg('Login Failed');
            }
            else if (err?.response?.data?.errors[0]?.msg === 'Invalid value' || err?.response?.data?.errors[1]?.msg === 'Invalid value') {
                setErrMsg('Login Failed');
            }
            else if (err?.response?.data?.values?.message === `User with this login not exist`) {
                setErrMsg('Користувача з таким логіном не існує');
            }
            else if (err?.response?.data?.status === 400) {
                setErrMsg('Пароль не підходить');
            }
            else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();

        }

    }
    return (
        <Body>
            <BoxEl
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            >
                <h3>Sign In</h3>
                <ErrWarning ref={errRef} className={errMsg ? "warning" : "offscreen"} aria-live="assertive">{errMsg}</ErrWarning>
                <TextFieldEl
                label="Login"
                variant="filled"
                required
                value={login}
                onChange={e => setLogin(e.target.value)}
                />
                <TextFieldEl
                    label="Password"
                    variant="filled"
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div>
                    <ButtonEl type="submit" variant="contained" color="primary">
                        {
                            isLoading ? <CircularProgress/> :
                            <p>Sign In</p>
                        }
                        
                    </ButtonEl>
                </div>
            </BoxEl>
        </Body>
    )
}

export default Login;
