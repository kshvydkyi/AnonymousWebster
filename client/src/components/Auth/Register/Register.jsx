import React, {  useRef, useState, useEffect  } from 'react';
import {Body, BoxEl, TextFieldEl, ButtonEl, ErrWarning} from './RegisterStyle'
import axios from '../../../api/axios';
import { CircularProgress } from '@mui/material';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const FULLNAME_REGEX = /^['а-яА-ЯїЇґҐіІєЄa-zA-Z\s]{2,24}$/

const REGISTER_URL = '/api/auth/register';

export default function Register() {
    const [login, setLogin] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const errRef = useRef();
    const [isLoading, setLoading] = useState(false);
  
    const handleSubmit = async e => {
      e.preventDefault();
      try {
        setLoading(true);
        const response = await axios.post(REGISTER_URL,
            JSON.stringify({ login: login, email: email, fullName: fullName, password: password, confirmPassword: confirmPassword}),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        console.log(response);
        setSuccess(true);
        setLoading(false);
    }
    catch (err) {
        setLoading(false);
        console.log(err)
        if (!err?.response) {
            setErrMsg('Сервер спить, вибачте');
        }
        else if (err.response.data.errors[0].msg === `Passwords do not match`) {
            setErrMsg('Паролі не співпадають');
        }
        else if (err.response.data.values.message === `User with login - ${login} already exist`) {
            setErrMsg('Такий логін вже існує');
        }
        else if (err.response.data.values.message === `Email - ${email} invalid`) {
            setErrMsg('Якийсь дивний email');
        }
        else if (err.response.data.values.message === `User with email - ${email} already exist`) {
            setErrMsg('Цей email вже використовується');
        } else {
            setErrMsg('Шось не так');
        }
        errRef.current.focus();
    }
    };
    return (
        <Body>
            <BoxEl
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            >
                <h3>Sign Up</h3>
                <ErrWarning ref={errRef} className={errMsg ? "warning" : "offscreen"} aria-live="assertive">{errMsg}</ErrWarning>
                <TextFieldEl
                label="Full Name"
                variant="filled"
                required
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                error={FULLNAME_REGEX.test(fullName) === false}
                helperText={FULLNAME_REGEX.test(fullName) === false ? 'Full Name is incorrect!' : ' '}
                />
                <TextFieldEl
                label="Login"
                variant="filled"
                required
                value={login}
                onChange={e => setLogin(e.target.value)}
                error={USER_REGEX.test(login) === false}
                helperText={USER_REGEX.test(login) === false ? 'Login is incorrect!' : ' '}
                />
                <TextFieldEl
                    label="Email"
                    variant="filled"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    error={EMAIL_REGEX.test(email) === false}
                    helperText={EMAIL_REGEX.test(email) === false ? 'Email is incorrect!' : ' '}
                />
                <TextFieldEl
                    label="Password"
                    variant="filled"
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    error={PWD_REGEX.test(password) === false}
                    helperText={PWD_REGEX.test(password) === false ? 'Password is incorrect!' : ' '}
                />
                <TextFieldEl
                    label="Confirm Password"
                    variant="filled"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    error={PWD_REGEX.test(confirmPassword) === false}
                    helperText={PWD_REGEX.test(confirmPassword) === false ? 'Confirmation Password is incorrect!' : ' '}
                />
                <div>
                    <ButtonEl type="submit" variant="contained" color="primary"
                    disabled = {!PWD_REGEX.test(confirmPassword) || !PWD_REGEX.test(password) || !EMAIL_REGEX.test(email) || !USER_REGEX.test(login) || !FULLNAME_REGEX.test(fullName)}
                    >
                        {
                            isLoading ? <CircularProgress/> :
                            <p>Sign Up</p>
                        }
                        
                    </ButtonEl>
                </div>
            </BoxEl>
        </Body>
    )
}