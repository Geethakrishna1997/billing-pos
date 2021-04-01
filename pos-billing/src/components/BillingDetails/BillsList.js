import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startGetBills } from '../../Actions/bills'
import BillItem from './BillItem'

export default function BillList(){
    const dispatch = useDispatch()
    
    const billsList = useSelector((state)=>{
        // console.log(state.bills)
        return state.bills
    })

    useEffect(()=>{
        dispatch(startGetBills())
    },[dispatch])

    return (
        <div>
            <h2>Total Bills - {billsList.length}</h2>
            <ul>
                {billsList.map((bill,i)=>{
                    return <li key={i}>
                        <BillItem key={bill._id} {...bill} />
                    </li>
                })}
            </ul>
        </div>
    )
}