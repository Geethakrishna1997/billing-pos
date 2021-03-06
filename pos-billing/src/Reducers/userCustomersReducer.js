const stateInitialValue = []

export default function userCustomersReducer(state=stateInitialValue,action){
    switch(action.type){        
        case "GET_CUSTOMERS" : {
            return [...action.payload]
        }
        case "POST_CUSTOMER" : {
            return [...state, {...action.payload}]
        }
        case "REMOVE_CUSTOMER" : {
            return state.filter(ele=>ele._id !== action.payload)
        }
        case "EDIT_CUSTOMER" : {
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