import React, { Component } from 'react'
import {Link, withRouter, Redirect} from 'react-router-dom';
import Api from '../services/api'
import '../UserStatus/user_status.css'

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
          username: '',
          userID: this.props.user.user.id,
          error: false
        }
    }

    componentDidMount(){
      const token = localStorage.getItem('token')
      if(!token) {
        this.props.history.push('/login')
      }
      else {
        Api.currentUser(token)
          .then(data => {

            if(data.error){
              this.props.history.push('/login')
            } else {
              this.props.handleLogin(data)
            }
          })
      }
    }






    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        })
    }

    handleUsernameUpdate(e){
        e.preventDefault()
        Api.updateUser(this.state)
        .then(data => console.log(data))
    }

    handleUserDelete(){
      Api.deleteUser(this.state)
      .then(alert("User Deleted"))
      this.props.history.push('/login')
    }

    render(){
      console.log(this.props.user)
    return(
      <div className='form-container'>
        <h3>Username: {this.props.user.user.username}</h3>
        <form className='profile-update' onSubmit={(e)=>{this.handleUsernameUpdate(e)}}>
          <input  onChange={(e) => this.handleUsernameChange(e)} value={this.state.username} />
          <input type='submit' value='Update Username' />
        </form>
        <input type='button' value='Delete Username' onClick={() => this.handleUserDelete()}/>
      </div>
    )
    }
}

export default withRouter(Profile)
