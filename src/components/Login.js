import React from "react";
import {Link} from 'react-router-dom';

const Login = props => (
    <div className='sign-container'>
        <form onSubmit={props.login}>
            <input className='input-form' type="text" name="username" placeholder="Username" maxLength="20"/>
            <br/>
            <input className='input-form' type="text" name="password" placeholder="Password"/>
            <br/>
            <button className='button-form'>Masuk</button>
        </form>
        <br/>
        <p>Baru pertama kali? Lakukan pendaftaran di <Link onClick={props.showRegister}>sini</Link></p>
    </div>
);

export default Login;