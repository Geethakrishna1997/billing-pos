import axios from 'axios'

export const startSetUsers=(formData,navigate)=>{
    return ((dispatch)=>{
        axios.post(' http://dct-billing-app.herokuapp.com/api/users/register',formData)
        .then((resp)=>{
            const res=resp.data
            if(res.hasOwnProperty('errors')){
                alert(res.message)
            } else {
                alert('successfully created an account')
                dispatch(setUsers(res))
                navigate('/login')
            }
        })
        .catch(err=>alert(err.message))
    })
}


export const setUsers=(data)=>{
    return {
        type : "REGISTERED",
        payload : data
    }
}

//get user details
export const startGetUser=()=>{
    return ((dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account',{
            headers : {
                "Authorization" :`Bearer ${localStorage.getItem( 'token')}`
        }})
        .then((resp)=>{
            const res=resp.data
            console.log('res',res)
            dispatch(getuser(res))
        })
        .catch(err=>err.message)
    })
}

export const getuser=(data)=>{
    return {
        type : 'GET_USER',
        payload : data
    }
}

//logout
export const startClearStore=()=>{
    return {
        type : "CLEAR"
    }
}