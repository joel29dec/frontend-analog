import React, { Component } from "react";
import './App.css';
import Login from './UserStatus/Login'
import Signup from './UserStatus/Signup'
import { Route } from 'react-router-dom';
import BoardgameContainer from './BoardgameContainer/BoardgameContainer'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import CartContainer from './CheckoutContainer/CartContainer'
import HeaderWidget from './HeaderContainer/HeaderWidget'
import Success from './CheckoutContainer/Cart/Success'
import Sidebar from './Sidebar.png'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/boardgameActions.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: { user: {} },
      cart: []
     }
  }

  componentDidMount(){
    this.props.fetchBoardgames()
  }

  handleLogin(user){
    this.setState({
      auth: { user }
    })
    localStorage.setItem('token', user.token)
  }

  handleLogout(user){
    this.setState({
      auth: { user: {} }
    })
    localStorage.removeItem('token')
  }

  addToCart = (boardgameId) => {
    let activeCart = this.props.cart
    const game = activeCart.find(boardgame => {return boardgame.id === boardgameId})
    const gameInfo = this.props.boardgames.find(boardgame => {return boardgame.id === boardgameId})
    if (game){
      activeCart.map(boardgame => {
        if (boardgame.id === boardgameId){return boardgame.quantity += 1}
      })
    } else {
      activeCart.push({id: boardgameId, name: gameInfo.name, image: gameInfo.image, price: gameInfo.price, quantity: 1})
    }
    this.props.addGame(activeCart)
    
  }

  addFromCart = (boardgameId) => {
    this.props.increaseQuantity(boardgameId)

  }

  subtractFromCart = (boardgameId) => {
    this.props.decreaseQuantity(boardgameId)
  }


  removeFromCart = (boardgameId) => {
    this.props.removeGame(boardgameId)
  }

  render() { 
    
    return ( 
    <div className="wrapper">
      <Navbar auth={this.state.auth} handleLogout={()=> this.handleLogout()} cart={this.state.cart} boardgames={this.state.boardgames}/>
      
      <Route path="/login" render={(routeProps) => {
        return <Login {...routeProps}
        handleLogin={(user) => {this.handleLogin(user)}}/>
      }} />
      <Route path="/profile" render={(routeProps) => {
        return <Profile {...routeProps}
        user={this.state.auth}
        handleLogin={(user) => {this.handleLogin(user)}}/>
      }} />
      <Route exact path="/" render={() => {
        return <div >
            <HeaderWidget />
            <div className="body-container">
              <div className="filter">
                <img src={Sidebar} />
              </div>
            <BoardgameContainer addToCart={(id) => {this.addToCart(id)}}/>
            </div>
          </div>
      }} />
      <Route path="/signup" render={(routeProps) => {
        return <Signup {...routeProps}
        handleLogin={(user) => {this.handleLogin(user)}}/>
      }} />
      <Route path="/cart" render={(routeProps) => {
        return <CartContainer boardgames={this.props.boardgames} cart={this.props.cart} addToCart={(id) => {this.addToCart(id)}} 
        addFromCart={(id) => {this.addFromCart(id)}} subtractFromCart={(id) => {this.subtractFromCart(id)}} removeFromCart={(id) => {this.removeFromCart(id)}}
        checkout={this.checkout} {...routeProps}/>
      }} />
      <Route path="/success" render={() => {
        return <Success />
      }} />
    </div>
     );
  }
}

function mapStateToProps(state) {
  return {boardgames: state.boardgameList.boardgames, cart: state.activeCart.cart}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}


export default connect( mapStateToProps, {...actions} )(App)
