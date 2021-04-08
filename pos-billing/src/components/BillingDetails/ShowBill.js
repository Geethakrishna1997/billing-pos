import React,{useState,useEffect} from 'react' 
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
// import {removeCusObj, removeBillProd} from '../../actions/billProdAction'
// import {removeBillTotal} from '../../actions/billTotalAction'
import PrintIcon from '@material-ui/icons/Print';
import {Card, CardActionArea, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';

export default function ShowBill(props){
    const [bill, setBill] = useState({}) 
    // let dispatch = useDispatch()
    // const {_id,date,billCustomer,billProducts,total,handleShowBill} = props
    const {id} = props
   console.log('props',props)

    const handleBtn = () => {
       
        props.history.push('/billgenerator')
    }

    useEffect(()=>{
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const res=response.data
            console.log('billobj',res)
            setBill(res)
        })
        .catch(err=>alert(err.message))
    },[])

    return (
        <div>
            
           <Typography variant="h4" align="center" style={{ color : 'teal'}}>Bill INVOICE</Typography> 
          
           {/* <Card  elevation={10}>
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
                                        <TableCell>Name</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Price(in ₹)</TableCell>
                                        <TableCell>Total price(in ₹)</TableCell>
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
                            <b>Total: ₹{total}</b>
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
                     </Card>  */}
                     <Button variant="contained" color="secondary"  onClick={handleBtn}>
                            back
                           </Button>
        </div>
    )     
}
