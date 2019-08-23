export default function boardgameReducer(state= {loading: false, boardgames: []}, action) {
    switch ( action.type ) {
      case 'LOADING_MEEPLES':
        return Object.assign({}, state, {loading: true})
      case 'FETCH_BOARDGAMES':
        return {loading: false, boardgames: action.payload}
      default:
        return state;
    }
  
  }