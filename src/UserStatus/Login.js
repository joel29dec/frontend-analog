import React from 'react';
import Api from '../services/api'
import {Link} from 'react-router-dom';
import './user_status.css'
class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      error: false
    }
  }
  handleUsernameChange(e){
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange(e){
    this.setState({
      password: e.target.value
    })
  }

  handleLogin(e){
    e.preventDefault()
    Api.login(this.state)
      .then(data => {
        if (data.error){
          this.setState({
            error: true
          })
        } else {
          this.props.handleLogin(data)
          this.props.history.push(`/profile`)
        }
      })
  }

  render(){
    return (
      <div className='form-container'>
        {this.state.error ? <h4>Invalid username or Password</h4> : null}
        <form onSubmit={(e)=>{this.handleLogin(e)}}>
          Username <input onChange={(e) => this.handleUsernameChange(e)} value={this.state.username} />
          Password <input type="password" onChange={(e) => this.handlePasswordChange(e)} value={this.state.password} />
          <input type='submit' value='login' />
        </form>
        <h2>Create a New Account?</h2>
        <Link to="/signup" >
            <div >Sign Up</div>
        </Link>
      </div>
    );
  }
}

export default Login;
