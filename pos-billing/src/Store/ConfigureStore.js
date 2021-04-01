import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userAccountReducer from '../Reducers/userAccountReducer'
import userAuthReducer from '../Reducers/userAuthReducer'
import userProductsReducer from '../Reducers/userProductsReducer'
import userCustomersReducer from '../Reducers/userCustomersReducer'
import userBillsReducer from '../Reducers/userBillsReducer'
import lineItemsReducer from '../Reducers/lineItemsReducer'

const ConfigureStore=()=>{
    const store=createStore(combineReducers({
        users : userAuthReducer,
        usersInfo : userAccountReducer,
        products : userProductsReducer,
        customers : userCustomersReducer,
        bills : userBillsReducer,
        lineItems : lineItemsReducer
    }),applyMiddleware(thunk))
    return store
}

export default ConfigureStore