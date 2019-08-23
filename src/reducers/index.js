import { combineReducers } from 'redux';
import boardgameList from './boardgameReducer';
import activeCart from './cartReducer'
export default combineReducers({
    boardgameList,
    activeCart
});
