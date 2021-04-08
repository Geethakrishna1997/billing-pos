import React,{useState, useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import ProductForm from './ProductForm'
import ProductsList from './ProductsList'
import { startGetProducts } from '../../Actions/products'
import SearchProduct from './SearchProduct'
import { Container, Grid, Typography } from '@material-ui/core'

export default function ProductsContainer(){
    const [term,setTerm] = useState('')

    const dispatch=useDispatch()

    const productsList=useSelector((state)=>{
        // console.log('list',state.products)
        return state.products
    })

    useEffect(()=>{
        dispatch(startGetProducts())
    },[dispatch])

    const handleChange=(e)=>{
        setTerm(e.target.value)
    }

    const filteredProducts=()=>{
        const res=productsList.filter(p=>{
            return p._id.includes(term) || p.name.toLowerCase().includes(term)
        })
        return res
    }

    return (
        <Container>
            <Grid xs={12} style={{position: "relative", textAlign: "center"}}>
                <Typography variant="h3">Products catelog</Typography>
            </Grid>
            <Grid container directions = "row" >
                
                <Grid xs={12} sm={6}>
                    <Typography><ProductsList products={filteredProducts()} /></Typography>
                </Grid>

                <Grid xs={12} sm={6}>
                    <Grid align="right">
                        <Typography ><SearchProduct term={term} handleChange={handleChange} /></Typography>
                    </Grid>
                    <Grid >
                    <Typography ><ProductForm /></Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}