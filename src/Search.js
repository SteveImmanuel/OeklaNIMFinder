import React,{Component} from 'react';
import cookie from 'react-cookie'

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            query:null,
            isSubmitted:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    search(){
        let d = new Date();
        d.setTime(d.getTime() + (minutes*60*1000));
        cookie.set("token", "6ba258da5d83a709699581f10cb4184f9222223e0b3fc6b82ee59949be3197a0", {path: "/", expires: d});
        fetch("https://api.stya.net/nim/byname?name=Jason&count=2", {
            method: 'GET',
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
        this.setState({query: event.target.value});
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
                    Search:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
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

export default Search;