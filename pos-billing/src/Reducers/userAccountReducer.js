const stateInitialValue ={}

export default function userAccountReducer(state=stateInitialValue,action){

    switch(action.type){
        case "GET_USER" : {
            return {...action.payload}
        }
        case "CLEAR" : {
            return stateInitialValue
        }
        default : {
            return {...state}
        }
    }
}