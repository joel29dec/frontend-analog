export function fetchBoardgames() {

    return function(dispatch){
      dispatch({type: 'LOADING_MEEPLES'})
      return fetch('http://localhost:3000/api/v1/boardgames')
        .then(res => {
          return res.json()
        }).then(data => {
          dispatch({type: 'FETCH_BOARDGAMES', payload: data})
      })
  
    }
  }
  
export function addGame(games) {
    return{
        type: 'ADD_GAME',
        payload: games
    }
}

export function increaseQuantity(id) {
    return{
        type: 'INCREASE_QUANTITY',
        payload: id
    }
}

export function decreaseQuantity(id) {
    return{
        type: 'DECREASE_QUANTITY',
        payload: id
    }
}


export function removeGame(id) {
    return{
        type: 'REMOVE_GAME',
        payload: id
    }
}