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