import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userAuthReducer from '../Reducers/userAuthReducer'

const ConfigureStore=()=>{
    const store=createStore(combineReducers({
        users : userAuthReducer
    }),applyMiddleware(thunk))
    return store
}

export default ConfigureStore