import React from "react";
import {Link} from 'react-router-dom';

const Login = props => (
    <div className='main-sign'>
        <p className='title-sign'>Login</p>
        <form onSubmit={props.login}>
            <input className='form-sign' type="text" name="username" placeholder="Username" maxLength="20"/>
            <br/>
            <input className='form-sign' type="password" name="password" placeholder="Password"/>
            <br/>
            <button className='button-sign'>Masuk</button>
        </form>
        <br/>
        <p>Baru pertama kali? Lakukan pendaftaran di <Link onClick={props.showRegister}>sini</Link></p>
    </div>
);

export default Login;