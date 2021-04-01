import axios from 'axios'

export const startSetProduct=(formData)=>{
    return ((dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/products',formData,{
            headers : {
                "Authorization" :`Bearer ${localStorage.getItem('token')}`
        }})
        .then((resp)=>{
            const res=resp.data
            // console.log('res',res)
            if(Object.keys(res).includes('errors')){
                console.log(res.message)
            }else{
                alert(`${res.name} product is added`)
                dispatch(setProducts(res))                
            }             
        })
        .catch(err=>alert(err.message))
    })
}

export const setProducts=(data)=>{
    return {
        type : 'POST_PRODUCT',
        payload : data
    }
}

//get products
export const startGetProducts=()=>{
    return ((dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/products',{
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
                dispatch(getProducts(res))                
            }
            
        })
        // .catch(err=>alert(err.message))
    })
}

export const getProducts=(products)=>{
    return {
        type : 'GET_PRODUCTS',
        payload : products
    }
}

//delete a product

export const startdeleteproduct=(id)=>{
    return ((dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }})
        .then((response)=>{
            const res=response.data
            console.log('remove',res)
            // swal(`${result.title} notes is successfully removed`)
            dispatch(remove(id))
        })
        .catch(err=>{alert(err.message)})
    })
}

export const remove=(id)=>{
    return {
        type : 'REMOVE',
        payload : id
    }
}

//edit product

export const startGetEdit=(id ,formData)=>{
    return (dispatch)=>{
        axios.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`,formData,{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            // swal(`${result.title} product is successfully updated`)
            console.log('edit_data',result)
            dispatch(editProducts(result))
        })
        .catch(err=>{alert(err.message)})
    }
}

export const editProducts=(result)=>{
    return {
        type : 'EDIT' ,
        payload : result
    }
}