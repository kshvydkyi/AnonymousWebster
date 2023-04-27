import React, {  useRef, useState, useEffect  } from 'react';
import {Body, BoxEl, TextFieldEl, ButtonEl, ErrWarning} from '../../styles/RegisterStyle'
import axios from '../../api/axios';
import { CircularProgress } from '@mui/material';
import {REGISTER_URL} from '../../api/routes'


import {DialogWindow} from '../Other/DialogWIndow'

import {USER_REGEX, PWD_REGEX, EMAIL_REGEX, FULLNAME_REGEX} from '../regex'


const  Register = () => {
    const [login, setLogin] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const errRef = useRef();
    const [isLoading, setLoading] = useState(false);
    const [stateDialog, setStateDialog] = useState(false);

    const [submitClicked, setSubmitClicked] = useState(false);
  
    const handleSubmit = async e => {
        setSubmitClicked(true)
      setErrMsg('');
      e.preventDefault();
      if(FULLNAME_REGEX.test(fullName) && PWD_REGEX.test(confirmPassword) && PWD_REGEX.test(password) && EMAIL_REGEX.test(email) && USER_REGEX.test(login)) {
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
            setStateDialog(true)
        }
        catch (err) {
            setLoading(false);
            console.log(err)
            if (!err?.response) {
                setErrMsg('Сервер спить, вибачте');
            }
            if(err?.response?.data?.values?.message === `User with this login or email already exists`) {
                setErrMsg('Такий логін або емейл вже існує');
            }
            if(err?.response?.data?.errors[0]?.msg === `Passwords do not match`) {
                setErrMsg('Паролі не співпадають');
            }
            else {
                setErrMsg('Шось не так');
            }
            errRef.current.focus();
        }
    }
    };
    return (
        <Body>
            <DialogWindow
            state={stateDialog}
            />
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
                error={FULLNAME_REGEX.test(fullName) === false && submitClicked === true}
                helperText={FULLNAME_REGEX.test(fullName) === false && submitClicked === true ? 'Full Name must be not less than 2 symbols and not more than 23 symbols' : ' '}
                />
                <TextFieldEl
                label="Login"
                variant="filled"
                required
                value={login}
                onChange={e => setLogin(e.target.value)}
                error={USER_REGEX.test(login) === false && submitClicked === true}
                helperText={USER_REGEX.test(login) === false && submitClicked === true ? 'Login must be not less than 4 symbols and not more than 24 symbols' : ' '}
                />
                <TextFieldEl
                    label="Email"
                    variant="filled"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    error={EMAIL_REGEX.test(email) === false && submitClicked === true}
                    helperText={EMAIL_REGEX.test(email) === false && submitClicked === true ? 'Email must be proper like: example@gmail.com ' : ' '}
                />
                <TextFieldEl
                    label="Password"
                    variant="filled"
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    error={PWD_REGEX.test(password) === false && submitClicked === true}
                    helperText={PWD_REGEX.test(password) === false && submitClicked === true ? 'Password must be not less than 8 symbols, including: digits, capital letter and at least one special symbol' : ' '}
                />
                <TextFieldEl
                    label="Confirm Password"
                    variant="filled"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    error={PWD_REGEX.test(confirmPassword) === false && submitClicked === true}
                    helperText={PWD_REGEX.test(confirmPassword) === false && submitClicked === true ? 'Confirm Password must be same like field above' : ' '}
                />
                <div>
                    <ButtonEl type="submit" variant="contained" color="primary">
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

export default Register;
