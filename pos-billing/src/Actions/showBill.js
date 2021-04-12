import axios from 'axios'

export const startGetBill=(id)=>{
    return ((dispatch)=>{
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            console.log("id",id)
            const res=response.data
            console.log('ShowBill', res)
            dispatch(getBill(res))
        })
        .catch((err)=>{alert(err.message)})
    })
}

export const getBill=(data)=>{
    return {
        type : 'GET_BILL',
        payload : data
    }
}