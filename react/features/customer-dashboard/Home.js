import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function Home() {
    // const dispatch = useDispatch()
    const navigate = useNavigate();
    const [email, setEmail] = useState('ryan@gmail.com');
    const [password, setPassword] = useState('rrrrrr');

    const handleLogin = async e => {
        e.preventDefault();

        const res = await axios.post('http://localhost:5000/login', {
            'email': email,
            'password': password
        });

        console.log('this is:', res);
        if (res.status == 200 && res.data.code == 200) {
            localStorage.setItem('auth', 1);
            navigate('/');
        }

    };


    return (<div id='welcome_page'>
        <div className='container'>
            <h1>Home</h1>
            <a href='/dfed'>call video</a>

        </div>
    </div>);
}


