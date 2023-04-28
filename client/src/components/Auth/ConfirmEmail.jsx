import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from '../../api/axios';
import {ACTIVE_EMAIL_URL} from '../../api/routes'
import {H1El, PEl} from '../../styles/ConfirmEmailStyle'

const ConfirmEmail = () => {
    const { token } = useParams();
    const [active, setActive] = useState('Waiting for email activation');
    const navigate = useNavigate();  
    useEffect(() => {
        const fetch = async () => {
            try {
                await axios.post(ACTIVE_EMAIL_URL + token);  
                console.log(token)
                setActive('Email activation is successfull');
                setTimeout(() => navigate('/login'), 5000);
            } 
            catch (e) {
                setActive('Token expired. Try again');
                setTimeout(() => navigate('/register'), 5000);

            }

        }
        fetch();

    }, []);
    return (
        <div className="form-background p-5 d-flex justify-content-center">
            <section className="email-reg text-white">
                <H1El>Result of registration</H1El>
                <PEl>{active}</PEl>
            </section>
        </div>   
    )
}

export default ConfirmEmail;

