import React, { Component } from 'react';
import BoardgameCard from './Boardgame/BoardgameCard'
import arrows from './images/arrow.png'
import './Boardgame/Boardgame.css'
import { connect } from 'react-redux'


class BoardgameContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      page: 0,
      // boardgames: this.props.boardgames,
      lastNineBoardgames: [],
    }
  }

  pageForward = (e) => {
    e.preventDefault()
    let start = this.state.page;
    if (start <= 8) {
      start += 1
      this.setState({
        page: start
      })
    }
  }

  pageBack = (e) => {
    e.preventDefault()
    let start = this.state.page;
    if (start >= 1){
      start -= 1
      this.setState({
        page: start
      })
    } else {return null}
  }

  render() {
      //let boardgames = this.state.boardgames
      
      const start = 10 * this.state.page
        const boardgames = this.props.boardgames.slice(start, start + 9) 
        
      return (
          <div className="boardgame_container">
              {boardgames.map( boardgame => {
                  return <BoardgameCard boardgame={boardgame} addToCart={this.props.addToCart}/>
              })}
              <div className='pagination'>
                <img src={arrows} className="arrows"/>
                <a onClick={(e)=>this.pageBack(e)} className="page-back"> left </a>
                <a onClick={(e)=>this.pageForward(e)} className="page-forward"> right </a>
              </div>
          </div>
       );
  }
}

function mapStateToProps(state) {
  return {boardgames: state.boardgameList.boardgames}
}

export default connect(mapStateToProps)(BoardgameContainer)