import React,{Component} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom';

const url = "http://3.17.216.66:5000/api/auth/userinfo"

class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.setItem('loginStatus','loggedOut')
        sessionStorage.setItem('userInfo','');
        sessionStorage.removeItem('ltk')
        this.setState({userData:''})
        this.props.history.push('/')
    }


    conditionlHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData
            sessionStorage.setItem('loginStatus','loggedIn')
            sessionStorage.setItem('userInfo',JSON.stringify(data))
            return(
                <>
                    <Link className='btn btn-success' to="/">
                        <span className='glyphicon glyphicon-user'></span> Hi {data.name}
                    </Link> &nbsp;
                    <button className='btn btn-danger' onClick={this.handleLogout}>
                        <span className='glyphicon glyphicon-log-out'></span> LogOut
                    </button>
                </>
            )
        }else{
            return(
                <>
                    <Link className='btn btn-success' to="/login">
                        <span className='glyphicon glyphicon-log-in'></span> LogIn
                    </Link> &nbsp;
                    <Link className='btn btn-warning' to="/register">
                        <span className='glyphicon glyphicon-user'></span> Register
                    </Link>
                </>
            )
        }
    }

    render(){
        return(
            <header>
                <div id="brand">
                    Developer Funnel &nbsp; 
                    <Link className='btn btn-info' to="/">Home</Link>
                </div>
                <div id="social">
                   {this.conditionlHeader()}
                </div>
            </header>
        )
    }

   

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
    

}

export default withRouter(Header);