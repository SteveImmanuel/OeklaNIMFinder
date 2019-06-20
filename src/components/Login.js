import React from "react";
import {Link} from 'react-router-dom';

const Login = props => (
    <div className='main-wrapper'>
        <p className='title'>Login</p>
        <form onSubmit={props.login}>
            <input className='form-field' type="text" name="username" placeholder="Username" maxLength="20"/>
            <br/>
            <input className='form-field' type="password" name="password" placeholder="Password"/>
            <br/>
            <button className='button'>Masuk</button>
        </form>
        <br/>
        <p>Baru pertama kali? Lakukan pendaftaran di <Link to='/' onClick={props.showRegister}>sini</Link></p>
    </div>
);

export default Login;