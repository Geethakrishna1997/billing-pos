const stateInitialValue =[]

export default function userBillsReducer(state=stateInitialValue,action){
    switch(action.type){        
        case 'GET_BILLS' : {
            return [...action.payload]
        }
        case 'DEL_BILL' : {
            return state.filter(bill=>bill._id !== action.payload)
        }        
        default : {
            return [...state]
        }
    }
}