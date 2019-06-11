import React from 'react';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import '../styles/Sign.css';


class Sign extends React.Component {
    state={
        message:null,
        register:true,
        login:false,
    }

    login = async e => {
        e.preventDefault();
        const username=e.target.elements.username.value;
        const password=e.target.elements.password.value;
        const request= await fetch("https://api.stya.net/nim/login", {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
            body: `username=${username}&password=${password}`
        });
        const result = await request.json();
        console.log(result);
        if(result.code===0){
            var expiry=new Date();
            expiry.setDate(expiry.getDate()+1);
            console.log(expiry)
            localStorage.setItem('token',result.token);
            localStorage.setItem('expire',expiry);
            this.props.history.push('/home');
        }else{
            //wrong pass / username
            this.setState({ message:'Username atau password salah!' });
        }
    }

    register = async e => {
        e.preventDefault();
        const username=e.target.elements.username.value;
        const password=e.target.elements.password.value;
        const request= await fetch("https://api.stya.net/nim/register", {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}),
            body: `username=${username}&password=${password}`
        });
        const result = await request.json();
        console.log(result);
        if(result.code===0){
            this.showLogin();
            this.setState({ message:'Akun berhasil dibuat, silahkan login menggunakan username dan password tadi'});
        }else{
            this.setState({ message:'Username sudah digunakan, coba yang lain!'});
        }
    }

    showLogin = () => {
        this.setState({
            login:true,
            register:false,
            message:null
        })
    }

    showRegister = () => {
        this.setState({
            login:false,
            register:true,
            message:null
        })
    }
 
    render(){
        return(
            <div>
                <Header/>        
                {this.state.message && <div className='message-sign'>{this.state.message}</div>}
                {this.state.login && <Login login={this.login} showRegister={this.showRegister}/>}
                {this.state.register && <Register register={this.register} showLogin={this.showLogin}/>}
            </div>
        );
    }

}

export default Sign;