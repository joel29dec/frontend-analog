import React, { Component } from 'react';
import Api from '../../services/api'
import {withRouter} from 'react-router-dom';
import Submit from './images/submit.png'
class Payment extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: '',
          cardNumber: '',
          expirationMonth: '',
          expirationYear: '',
          CVV: '',
          valid: undefined
        }
      }


    handleNameChange(e){
    this.setState({
        name: e.target.value
    })
    }

    handleCardChange(e){
    this.setState({
        cardNumber: e.target.value
    })
    }

    handleCheckout(e){
        e.preventDefault()
        if(this.state.cardNumber.length < 1) return
        const card = Api.validator(this.state.cardNumber)
        if(card == "VISA" || card == "AMERICAN EXPRESS" || card == "MASTERCARD" || card == "JCB" || card == "DISCOVER" || card == "DINERS CLUB"){
            this.props.history.push('/success')
        }else{
            alert("Your credit card information is incorrect")
        }
    }



    render() {

        return (
        <div>
          <h3>Payment Info.</h3>
          <form onSubmit={(e)=>{this.handleCheckout(e)}}>
              Name on Card: <input className='name' onChange={(e) => this.handleNameChange(e)} value={this.state.name} />
            Card Number: <input className='card'onChange={(e) => this.handleCardChange(e)} value={this.state.cardNumber} />
            <input type='submit' value='Check Out' className='submit'/>
          </form>
        </div>
        );
    }
}

export default withRouter(Payment)
