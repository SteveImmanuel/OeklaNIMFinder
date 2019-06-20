import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.css';

const Header = (props) => (
    <div className='main-header'>
        <span className='title-header'>Oekla NIM Finder</span>
        { props.logout && <Link to='/' className='logout-header' onClick={()=>{localStorage.clear()}}> Keluar </Link> }
    </div>

);

export default Header;