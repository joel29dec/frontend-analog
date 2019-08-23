export default {
  login: (loginData) => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    }

    return fetch('http://localhost:3000/api/v1/auth', reqObj)
      .then(res => res.json())
  },


  signup: (loginData) => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    }

    return fetch('http://localhost:3000/api/v1/current_user', reqObj)
      .then(res => res.json())
  },



  currentUser: (token) => {
    const reqObj = {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    }

    return fetch('http://localhost:3000/api/v1/current_user', reqObj)
      .then(res => res.json())
  },

  updateUser: (username) => {
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(username)
    }
  
    return fetch(`http://localhost:3000/api/v1/current_user/${username.userID}`, reqObj)
      .then(res => res.json())
  },

  deleteUser: (user) => {
    return fetch(`http://localhost:3000/api/v1/current_user/${user.userID}`, {method: 'DELETE'})
  },

  validator: (cardNumber) =>{
  const cardArray = cardNumber.toString().split("").map((e) => parseInt(e) )
  validlen(cardArray);
  const splitArr =  arrSplit(cardArray)
  const checksum = sumArrDigits(splitArr.arr1).reduce((a, c) => a + c) + splitArr.arr2.reduce((a, c) => a + c);

  if (checksum % 10 === 0){
    
    const typeValidatorArr = cardArray.slice(0,2)
    const typeValidatorInt = parseInt(typeValidatorArr.join(""))
    
    if (typeValidatorArr[0] === 4){
      return "VISA"
    }else if(typeValidatorInt === 34 || typeValidatorInt === 37){
      return "AMERICAN EXPRESS";
    }else if(typeValidatorInt === 22 || typeValidatorInt === 51 || typeValidatorInt === 52 || typeValidatorInt === 53 || typeValidatorInt === 54){
      return "MASTERCARD";
    }else if(typeValidatorInt === 35 ){
      return "JCB";
    }else if(typeValidatorInt === 60 ){
      return "DISCOVER";
    }else if(typeValidatorInt === 30 ){
      return "DINERS CLUB";
    }else{
      return false;
    }
  }


  function sumArrDigits(array){
    return array.join("").split("").map(e => parseInt(e))
  }

  function validlen(arr){
    return  arr.length === 13  || arr.length === 15 || arr.length === 16
  }

  function arrSplit(cardArray){
    const selectOddValues = cardArray.filter((a,i)=>i%2 === 1);
    const selectEvenValues = cardArray.filter((a,i)=>i%2 === 0);
    let arr1;
    let arr2;
    if (cardArray.length % 2 === 1){
      arr1 = selectOddValues.map(e => e * 2);
      arr2 = selectEvenValues;
    }else {
      arr1 = selectEvenValues.map(e => e * 2);
      arr2 = selectOddValues;
    }
    return {arr1, arr2}
  }
}
}
