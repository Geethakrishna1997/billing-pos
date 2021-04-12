import { Button, Card, CardActionArea, CardActions, CardContent, Typography, Grid } from '@material-ui/core'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
// import { jsPDF } from "jspdf"
import { useSelector,useDispatch } from 'react-redux'
import { startDeleteBill } from '../../Actions/bills'
import { startGetBill } from '../../Actions/showBill'

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

    const handleBill = () => {
        dispatch(startGetBill(_id))
    }    

    // const generatePdf=()=>{
    //     let doc = new jsPDF("P","pt")
    //     doc.text(280,20, "***Bill***")
    //     doc.setFont('helvetica')
    //     doc.text(20,60,`Customer_id: ${billCustomer.name}`)
    //     doc.setFont('helvetica')
    //     doc.text(20,80,`Date: ${date.slice(0,10)}`)
    //     doc.text(20,100,`Order Details:`)
                        
    //     doc.save('bill.pdf')                       
    // }

    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography>Customer Name : {billCustomer && billCustomer.name}</Typography>
                        <Typography>Bill Date : {date.slice(0,10)}</Typography>
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

                        <Button 
                            onClick={handleBill}
                            variant="contained" 
                            color="secondary" >   
                            <Link to='/showbill' >show bill</Link>
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
            
        </div>
    )
}
