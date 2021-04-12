const stateInitialValue={}

export default function showBillReducer(state=stateInitialValue,action){
    switch(action.type){
        case 'GET_BILL' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    } 
}
