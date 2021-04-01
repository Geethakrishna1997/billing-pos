import { Button, Card, CardActionArea, CardActions, CardContent, Link, Typography, Grid } from '@material-ui/core'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startDeleteBill } from '../../Actions/bills'

export default function BillItem(props){
    const { _id,date,customer,lineItems,user,createdAt,updatedAt,total } = props
    const dispatch=useDispatch()
    
    const billProducts=useSelector((state)=>{
        const newProducts=[]
        for(const item of lineItems){
            const temp=state.products.find(p=>p._id === item.product)
            newProducts.push({...temp,...item})
        }
        return newProducts
    })
    // console.log('billProduct',billProducts)

    const billCustomer=useSelector((state)=>{        
        return state.customers.find(c=>c._id === customer)
    })
    // console.log('billCustomer',billCustomer)

    const handleRemove=()=>{
        dispatch(startDeleteBill(_id))
    }

    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography>Customer Name : {billCustomer && billCustomer.name}</Typography>
                        <Typography>Bill Date : {date}</Typography>
                        <Grid item xs={12} style={{overflow : billProducts.length> 0 && 'scroll' ,maxHeight : '300px'}}>
                            {billProducts.map((prod,i)=>{
                                return (
                                    <CardContent>
                                        Product name : {prod.name}<br/>
                                        Product Quantity : {prod.quantity}<br/>
                                        product Price : {prod.price}<br/>
                                        SubTotal : {prod.subTotal}<br/>
                                    </CardContent>
                                )
                            })}
                            Total : {total}<br/>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button 
                            onClick={handleRemove}
                            variant="contained" 
                            color="secondary"    
                        >Del</Button>
                        <Link>Genetare Bill</Link>
                    </CardActions>
                </CardActionArea>
            </Card>
            {/* <blockquote>
                Customer Name : {billCustomer && billCustomer.name}<br/>
                {/* Customer Phone : {billCustomer && billCustomer.phone}<br/> */}
                {/* Bill Date : {date}
                <ul>
                {billProducts.map((prod,i)=>{
                    return (
                        <div key={i}>
                            <li >
                                Product name : {prod.name}<br/>
                                Product Quantity : {prod.quantity}<br/>
                                product Price : {prod.price}<br/>
                                SubTotal : {prod.subTotal}<br/>
                            </li>
                        </div>
                    )
                })}
                </ul>
                Total : {total}<br/>
                <Button 
                    onClick={handleRemove}
                    variant="contained" 
                    color="secondary"    
                >Del</Button>
                <Link>Genetare Bill</Link>
            </blockquote>  */}
        </div>
    )
}
