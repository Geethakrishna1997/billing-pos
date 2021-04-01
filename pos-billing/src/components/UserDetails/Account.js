import { Card, CardActionArea, CardContent, Container, Grid, Typography } from '@material-ui/core'
import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetUser } from '../../Actions/userAuth'

export default function Account(){
    const dispatch = useDispatch()

    const userInfo = useSelector((state)=>{
        return state.usersInfo
    })

    useEffect(() =>{
        dispatch(startGetUser())
    
    },[])

    return (
        <Container>
            <Grid xs={12} style={{position: 'relative', top: 20}}>
                <Grid >
                    <Typography variant="h4">Account Info of {userInfo.username}</Typography>
                </Grid>
                <Grid xs={12} >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography variant="subtitle1">UserId : {userInfo._id}</Typography>
                                <Typography variant="subtitle1">UserName : {userInfo.username}</Typography>
                                <Typography variant="subtitle1">Email : {userInfo.email}</Typography>
                                <Typography variant="subtitle1">Business name : {userInfo.businessName}</Typography>
                                <Typography variant="subtitle1">Address : {userInfo.address}</Typography>
                                <Typography variant="subtitle1">Business Established : {userInfo.createdAt}</Typography>

                            </CardContent>
                        </CardActionArea>
                        {/* <li>UserId : {userInfo._id}</li>
                        <li>UserName : {userInfo.username}</li>
                        <li>Email : {userInfo.email}</li>
                        <li>Business name : {userInfo.businessName}</li>
                        <li>Address : {userInfo.address}</li>
                        <li>Business Established : {userInfo.createdAt}</li> */}
                        
                    </Card>
                </Grid>
            </Grid>
            
        </Container>
    )
}
/*
_id
username
email
password
businessName
address
createdAt
updatedAt
*/