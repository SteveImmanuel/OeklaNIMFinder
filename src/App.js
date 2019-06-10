import React,{Component} from 'react';
import Form from './components/Form';
import Result from './components/Result';
import {authenticate} from './components/AuthUtil';
import './styles/Sign.css';


class App extends Component{
  state={
    prevResult:[],
    curResult:[],
    nextResult:[],
    name: undefined,
    nim: undefined,
    count: undefined,
    page: undefined,
    token: undefined
  }

  requestById = async (page,key) => {
    const token = localStorage.getItem('token');
    const request=await fetch(`https://api.stya.net/nim/byid?query=${this.state.nim}&count=${this.state.count}&page=${page}`, {
      method: 'GET',
      headers: new Headers({'Auth-Token': token})
    });
    const result=await request.json();
    this.setState({ [key]:result.payload });
  }

  requestByName = async (page,key) => {
    const token = localStorage.getItem('token');
    const request=await fetch(`https://api.stya.net/nim/byname?name=${this.state.name}&count=${this.state.count}&page=${page}`, {
      method: 'GET',
      headers: new Headers({'Auth-Token': token})
    });
    const result=await request.json();
    this.setState({ [key]:result.payload });
  }

  search = (e) => {
    e.preventDefault();
    const form=e.target.elements;
    this.setState({
      name:form.name.value,
      // nim:form.nim.value,
      count:form.count.value,
      prevResult:[],
      curResult:[],
      nextResult:[],
      page:undefined
    });
    const auth=authenticate();
    console.log(auth);
    if (auth===1){
      const token = localStorage.getItem('token');
      let expiry = new Date(localStorage.getItem('expire'));
      this.request(token,0);
      expiry.setDate(expiry.getDate()+1);
      localStorage.setItem('expire',expiry);
    }else{
      alert('session timeout');
      this.props.history.push('/');
    }

  }


  request = (page) => {
    if(page>0){
      console.log('masuk prev');
      this.requestByName(page-1,'prevResult');
    }

    console.log('masuk cur');
    this.requestByName(page,'curResult');

    console.log('masuk next');
    this.requestByName(page+1,'nextResult');
    
    this.setState({ page });
  }

  next = () => {
    const nextPage=this.state.page+1;
    this.setState({
      nextResult:[]
    },
      this.request(nextPage)
    );
  }

  prev = () => {
    const prevPage=this.state.page-1;
    this.setState({
      prevResult:[]
    },
      this.request(prevPage)
    );
  }

  render(){
    return(
      <div>
        <Form search={this.search}/>
        <Result 
          prevResult={this.state.prevResult}
          curResult={this.state.curResult} 
          nextResult={this.state.nextResult}
          next={this.next}
          prev={this.prev}
        />
      </div>
    );
  }
}

export default App;
