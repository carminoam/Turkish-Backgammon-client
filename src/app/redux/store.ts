import { combineReducers, createStore } from "redux";
import { gamePositionReducer } from "./game-position-state";

const reducers = combineReducers({ 
    gamePositionState : gamePositionReducer
 });

const store = createStore(reducers);

export default store;
