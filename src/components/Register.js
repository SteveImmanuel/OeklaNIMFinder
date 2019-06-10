import React from "react";
import {Link} from 'react-router-dom';

const Register = props => (
    <div className='sign-container'>
        <form onSubmit={props.register}>
            <input className='input-form' type="text" name="username" placeholder="Username (max. 20 karakter)" maxLength="20"/>
            <br/>
            <input className='input-form' type="text" name="password" placeholder="Password"/>
            <br/>
            <button className='button-form'>Daftar</button>
        </form>
        <br/>
        <p>Sudah punya akun? Lakukan login di <Link onClick={props.showLogin}>sini</Link></p>
    </div>
);

export default Register;