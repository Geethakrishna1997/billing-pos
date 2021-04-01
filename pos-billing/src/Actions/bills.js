import axios from 'axios'

// post bill
export const startSetBills=(formData)=>{
    return ((dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/bills',formData,{
            headers : {
                "Authorization" :`Bearer ${localStorage.getItem('token')}`
        }})
        .then((response)=>{
            const res=response.data
            // console.log('post bill',res)
            dispatch(setBill(res))
        })
        .catch(err=>alert(err.message))
    })
}

export const setBill=(bill)=>{
    return {
        type : 'POST_BILL',
        payload : bill
    }
}


// get bill

export const startGetBills=()=>{
    return ((dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/bills',{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const res=response.data
            console.log('get bills',res)
            dispatch(getBills(res))
        })
        // .catch(err=>alert(err.message))
    })
}

export const getBills=(bills)=>{
    return {
        type : 'GET_BILLS',
        payload : bills
    }
}

// delete bill

export const startDeleteBill=(id)=>{
    return ((dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response=>{
            const res=response.data
            console.log('del bill', res)
            dispatch(deleteBill(res))
        })
    })
}

export const deleteBill=(bill)=>{
    return {
        type : 'DEL_BILL',
        payload : bill
    }
}
