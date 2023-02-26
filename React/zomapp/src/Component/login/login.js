import React,{Component} from 'react';
import Header from '../Header';

const url = "http://3.17.216.66:5000/api/auth/login";

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            email:'rohini@gmail.com',
            password:'12345678',
            message:''
        }
    }


    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }


    login = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/')
            }
        })
    }


    render(){
        return(
            <>
            <Header/>
                <div className="container">
                    <hr/>
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <h3>Login</h3>
                        </div>
                        <div className="panel-body">
                            <h3 style={{color:'red'}}>{this.state.message}</h3>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="email" className="control-label">Email</label>
                                    <input className="form-control" id="email" name="email"
                                    value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="password" className="control-label">Password</label>
                                    <input className="form-control" id="password" name="password"
                                    value={this.state.password} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <button className="btn btn-info" onClick={this.login}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;