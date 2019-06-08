import React,{Component} from 'react';
import Form from './components/Form';
import Result from './components/Result';


// function register(){
//   fetch("https://api.stya.net/nim/register", {
//     method: 'POST',
//     headers: new Headers({
//       'Content-Type': 'application/x-www-form-urlencoded',
//     }),
//       body: "username=testuser4444444&password=pass1234"
//     })
//     .then(res=>res.json())
//     .then(json=>{
//       this.setState({
//         isLoaded:true,
//         items:json,
//       })
//     });
// }



class App extends Component{
  state={
    prevResult:[],
    curResult:[],
    nextResult:[],
    name: "",
    nim: "",
    count: "",
    page: undefined,
    token: undefined
  }

  search = (e) => {
    e.preventDefault();
    const form=e.target.elements;
    this.setState({
      name:form.name.value,
      nim:form.nim.value,
      count:form.count.value,
      prevResult:[],
      curResult:[],
      nextResult:[],
      page:undefined
    },
      ()=>this.request(0)
    );
  }

  requestById = async (state,page,key) => {
    const header = new Headers({'Auth-Token': '626c2c164c1d2c44262a89af36b62ca500f783a3963ab5ae3af7c993daa66b86'});
    // console.log(state);
    const request=await fetch(`https://api.stya.net/nim/byid?query=${state.nim}&count=${state.count}&page=${page}`, {
      method: 'GET',
      headers: header
    })
    const result=await request.json();
    // console.log(result.payload);
    this.setState({ [key]:result.payload });
  }

  requestByName = async (state,page,key) => {
    const header = new Headers({'Auth-Token': '626c2c164c1d2c44262a89af36b62ca500f783a3963ab5ae3af7c993daa66b86'});
    const request=await fetch(`https://api.stya.net/nim/byname?name=${state.name}&count=${state.count}&page=${page}`, {
      method: 'GET',
      headers: header
    })
    const result=await request.json();
    this.setState({ [key]:result.payload });
  }

  request = (page) => {
    const state = this.state;
    if(page>0){
      console.log('masuk prev');
      this.requestByName(state,page-1,'prevResult');
    }

    console.log('masuk cur');
    this.requestByName(state,page,'curResult');

    console.log('masuk next');
    this.requestByName(state,page+1,'nextResult');
    
    this.setState({ page });
  }

  next = (e) => {
    const nextPage=this.state.page+1;
    this.setState({
      nextResult:[]
    },
      this.request(nextPage)
    );
  }

  prev = (e) => {
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
