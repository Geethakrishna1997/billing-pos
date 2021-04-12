import React from 'react' 
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import PrintIcon from '@material-ui/icons/Print';
import {Card, CardActionArea, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';

export default function ShowBill(props){
    
    const printBill=useSelector((state)=>{
        return state.bill
    })
    console.log("bill",printBill)

    const billProducts=useSelector((state)=>{
        const newProducts=[]
        for(const item of printBill.lineItems){
            const temp=state.products.find(p=>p._id === item.product)
            newProducts.push({...temp,...item})
        }
        return newProducts
    })
    // console.log('billProduct',billProducts)

    const billCustomer=useSelector((state)=>{        
        return state.customers.find(c=>c._id === printBill.customer)
    })
    // console.log('billCustomer',billCustomer)

    const handleBtn = () => {
       props.history.push('/billgenerator')
    }

    return (
        <div>
            
           <Typography variant="h4" align="center" style={{ color : 'teal'}}>Bill INVOICE</Typography> 
          
           <Card  elevation={10}>
           <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                           <b>Name :</b> {billCustomer && billCustomer.name}        
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Phn.No : +91 {billCustomer && billCustomer.mobile}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Products Bought : 
                            </Typography>
                            <Table border="2" size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell variant='h5'>Name</TableCell>
                                        <TableCell variant='h5'>Quantity</TableCell>
                                        <TableCell variant='h5'>Price(in ₹)</TableCell>
                                        <TableCell variant='h5'>Total price(in ₹)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {billProducts && billProducts.map((product) => {
                                        return (
                                            <TableRow key={product._id}>
                                                <TableCell>{product.name}</TableCell>
                                                <TableCell>{product.quantity}</TableCell>
                                                <TableCell>{product.price}</TableCell>
                                                <TableCell>{product.subTotal}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                            
                         
                          <Typography variant="h5" align="right"  component="h3">
                            <b>Total: ₹{printBill.total}</b>
                          </Typography>
                          <Typography align="center" variant="body2"  color="textPrimary" component="p">
                             Note: Products once sold cannot be returned!
                          </Typography>
                          <Typography align="center" variant="body2"  color="textPrimary" component="p">
                             ***Thank You!...Visit Again!***
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                           <Button variant="contained" color="secondary"  onClick={handleBtn}>
                            back
                           </Button>
                           <Button variant="contained" 
                                   color="primary" 
                                   startIcon={<PrintIcon/>}
                                   onClick={() => {window.print()}} >
                               Print Bill
                           </Button>
                      </CardActions>
                     </Card>
        </div>
    )     
}
