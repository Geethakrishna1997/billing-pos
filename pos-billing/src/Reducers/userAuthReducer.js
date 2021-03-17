const stateInitialValue = []

export default function userAuthReducer(state=stateInitialValue,action){
    switch(action.type){
        case "REGISTER" : {
            return [...state,{...action.payload}]
        }
        default : {
            return [...state]
        }
    }
}