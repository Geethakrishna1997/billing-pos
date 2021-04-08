const stateInitialValue = []

export default function userProductsReducer(state=stateInitialValue,action){
    switch(action.type){
        case "REMOVE" : {
            return state.filter(ele=>ele._id !== action.payload)
        }
        case "GET_PRODUCTS" : {
            return [...action.payload]
        }
        case "POST_PRODUCT" : {
            return [...state, {...action.payload}]
        }
        case "EDIT" : {
            return state.map(ele =>{
                if(ele._id === action.payload._id){
                    return {...ele , ...action.payload}
                } else {
                    return {...ele}
                }
            })
        }
        default : {
            return [...state]
        }
    }
}