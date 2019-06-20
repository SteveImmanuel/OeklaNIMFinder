import React from "react";
import {Link} from 'react-router-dom';

const Register = props => (
    <div className='main-wrapper'>
        <p className='title'>Pendaftaran</p>
        <form onSubmit={props.register}>
            <input className='form-field' type="text" name="username" placeholder="Username (maks. 20 karakter)" maxLength="20"/>
            <br/>
            <input className='form-field' type="password" name="password" placeholder="Password"/>
            <br/>
            <button className='button'>Daftar</button>
        </form>
        <br/>
        <p>Sudah punya akun? Lakukan login di <Link to='/' onClick={props.showLogin}>sini</Link></p>
    </div>
);

export default Register;