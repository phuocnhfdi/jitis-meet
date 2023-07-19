import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    // const dispatch = useDispatch()
    const [ email, setEmail ] = useState('ryan@gmail.com');
    const [ password, setPassword ] = useState('rrrrrr');

    const handleLogin = async e => {
        e.preventDefault();

        const res = await axios.post('http://localhost:5000/login', { 'email': email,
            'password': password });

        console.log('this is:', res);
        if (res.status == 200 && res.data.code == 200) {
            localStorage.setItem('auth', 1);
            navigate('/');
        }

    };


    return (<div id = 'welcome_page'>
        <div className = 'container'>
            <div className = 'row justify-content-center'>
                <div className = 'col-xxl-4 col-lg-5'>
                    <div className = 'card'>
                        {/* Logo */}
                        <div className = 'card-header py-4 text-center bg-primary'>
                            <a href = 'index.html'>
                                <span><img
                                    alt = 'logo'
                                    height = { 22 }
                                    src = 'assets/images/logo.png' /></span>
                            </a>
                        </div>
                        <div className = 'card-body p-4'>
                            <div className = 'text-center w-75 m-auto'>
                                <h4 className = 'text-dark-50 text-center pb-0 fw-bold'>Sign In</h4>
                                <p className = 'text-muted mb-4'>Enter your email address and password to access admin panel.</p>
                            </div>
                            <form action = '#'>
                                <div className = 'mb-3'>
                                    <label
                                        className = 'form-label'
                                        htmlFor = 'emailaddress'>Email address</label>
                                    <input
                                        className = 'form-control'
                                        id = 'emailaddress'
                                        onChange = { e => setEmail(e.target.value) }
                                        placeholder = 'Enter your email'
                                        required = { true }
                                        type = 'email'
                                        value = { email } />
                                </div>
                                <div className = 'mb-3'>
                                    <a
                                        className = 'text-muted float-end'
                                        href = 'pages-recoverpw.html'><small>Forgot your password?</small></a>
                                    <label
                                        className = 'form-label'
                                        htmlFor = 'password'>Password</label>
                                    <div className = 'input-group input-group-merge'>
                                        <input
                                            className = 'form-control'
                                            id = 'password'
                                            onChange = { e => setPassword(e.target.value) }
                                            placeholder = 'Enter your password'
                                            type = 'password'
                                            value = { password } />
                                        <div
                                            className = 'input-group-text'
                                            data-password = 'false'>
                                            <span className = 'password-eye' />
                                        </div>
                                    </div>
                                </div>

                                <div className = 'mb-3 mb-0 text-center'>
                                    <button
                                        className = 'btn btn-primary'
                                        onClick = { handleLogin }
                                        type = 'submit'> Log In </button>
                                </div>
                            </form>
                        </div> {/* end card-body */}
                    </div>
                </div>
            </div>

        </div>
    </div>);
}


