import React,{Component} from 'react';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            result:null,
            isSubmitted:false,
            username:null,
            pass:null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    register(){
        fetch("https://api.stya.net/nim/register", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
            }),
            body: "username="+this.state.username+"&password="+this.state.pass,
            })
        .then(res=>res.json())
        .then(json=>{
        this.setState({
            result:json,
            isSubmitted:true,
        })
        });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        this.register();
        event.preventDefault();
    }

    render(){
        var result=this.state.result;
        var isSubmitted=this.state.isSubmitted;

        if(!isSubmitted){
            return(
                <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="username" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input type="text" name="pass" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                </form>
                
            );
        }else{
            return(
                <div>
                    {result.status}<br></br>
                    {result.code}
                </div>
            );
        }
    }
}

export default Register;