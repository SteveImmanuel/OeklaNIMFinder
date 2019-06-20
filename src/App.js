import React from 'react';
import Form from './components/Form';
import Result from './components/Result';
import Header from './components/Header';
import './styles/Main.css';


class App extends React.Component{
    state={
        prevResult:null,
        curResult:null,
        nextResult:null,
        page: null,
        message: null
    }

    requestAPI = async (page,key) => { //type 0=byID, type 1=byName
        const token = localStorage.getItem('token');
        const query = localStorage.getItem('query');
        const count = localStorage.getItem('count');
        const type = localStorage.getItem('type');
        var link;
        if(type==='0'){
            link = `https://api.stya.net/nim/byid?query=${query}&count=${count}&page=${page}`;
        }else{
            link = `https://api.stya.net/nim/byname?name=${query}&count=${count}&page=${page}`;
        }
        const request=await fetch(link, {
            method: 'GET',
            headers: new Headers({'Auth-Token': token})
        });
        const result=await request.json();
        if(result.status === 'OK'){
            this.setState({ [key]:result.payload });
        }else{
            alert('Token invalid. Silahkan lakukan login kembali.');
            localStorage.clear();
            this.props.history.push('/');
        }
    }

    search = (e) => {
        e.preventDefault();
        const form=e.target.elements;
        localStorage.setItem('query',form.query.value);
        localStorage.setItem('count',form.count.value);
        localStorage.setItem('type',form.type.value);
        this.setState({
            prevResult:null,
            page:0,
            message:null
        }, () => {
            if (form.type.value==='-1'){
                this.setState({ 
                    curResult:null,
                    nextResult:null,
                    message:'Pilih tipe pencarian terlebih dahulu' 
                });
            }else{
                this.requestAPI(this.state.page,'curResult');
                this.requestAPI(this.state.page+1,'nextResult');
            }
        });
    }

    next = () => {
        //disimpan terlebih dahulu karena setState bersifat async
        const newCur = this.state.nextResult; 
        const newPrev = this.state.curResult;
        const newPage = this.state.page+1;
        this.setState({
            prevResult:newPrev,
            curResult:newCur,
            nextResult:[],
            page:newPage
        },() => {
            this.requestAPI(this.state.page+1,'nextResult');
        });
    }

    prev = () => {
        //disimpan terlebih dahulu karena setState bersifat async
        const newCur = this.state.prevResult;
        const newNext = this.state.curResult;
        const newPage = this.state.page-1;
        this.setState({
            prevResult:[],
            curResult:newCur,
            nextResult:newNext,
            page:newPage
        },() => {
            if(this.state.page-1<0){
                this.setState({ prevResult:[] });
            }else{
                this.requestAPI(this.state.page-1,'prevResult');
            }
        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(this.state.curResult!==prevState.curResult){
            if(Array.isArray(this.state.curResult) && this.state.curResult.length===0){
                this.setState({ message: 'Hasil tidak ditemukan' });
            }
        }
    }

    render(){
        return(
            <div>
                <Header logout={true}/>
                <Form search={this.search}/>
                <Result 
                    prevResult={this.state.prevResult}
                    curResult={this.state.curResult} 
                    nextResult={this.state.nextResult}
                    next={this.next}
                    prev={this.prev}
                    message={this.state.message}
                />
            </div>
        );
    }
}

export default App;
