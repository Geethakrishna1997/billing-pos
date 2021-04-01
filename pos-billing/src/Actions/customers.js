import axios from 'axios'

export const startSetCustomers=(formData)=>{
    return ((dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/customers',formData,{
            headers : {
                "Authorization" :`Bearer ${localStorage.getItem('token')}`
        }})
        .then((resp)=>{
            const res=resp.data
            // console.log('res',res)
            if(Object.keys(res).includes('errors')){
                console.log(res.message)
            }else{
                alert(`${res.name} customer is added`)
                dispatch(setCustomers(res))                
            }             
        })
        .catch(err=>alert(err.message))
    })
}

export const setCustomers=(data)=>{
    return {
        type : 'POST_CUSTOMER',
        payload : data
    }
}

//get customers
export const startGetCustomers=()=>{
    return ((dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/customers',{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((resp)=>{
            const res=resp.data
            // console.log('get res',res)
            if(Object.keys(res).includes('errors')){
                console.log(res.message)
            }else{                
                dispatch(getCustomers(res))                
            }
            
        })
        // .catch(err=>alert(err.message))
    })
}

export const getCustomers=(customers)=>{
    return {
        type : 'GET_CUSTOMERS',
        payload : customers
    }
}

//delete a customer

export const startdeletecustomer=(id)=>{
    return ((dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }})
        .then((response)=>{
            const res=response.data
            console.log('remove',res)
            // swal(`${result.title} notes is successfully removed`)
            dispatch(removeCustomer(id))
        })
        .catch(err=>{alert(err.message)})
    })
}

export const removeCustomer=(id)=>{
    return {
        type : 'REMOVE_CUSTOMER',
        payload : id
    }
}

//edit customer

export const startEditCustomer=(id ,formData)=>{
    return (dispatch)=>{
        axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,formData,{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            // swal(`${result.title} product is successfully updated`)
            console.log('edit_data',result)
            dispatch(editCustomer(result))
        })
        .catch(err=>{alert(err.message)})
    }
}

export const editCustomer=(result)=>{
    return {
        type : 'EDIT_CUSTOMER' ,
        payload : result
    }
}