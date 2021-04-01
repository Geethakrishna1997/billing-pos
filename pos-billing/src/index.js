import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ConfigureStore from './Store/ConfigureStore'
import { startGetUser } from './Actions/userAuth';
import { startGetProducts } from './Actions/products';
import { startGetCustomers } from './Actions/customers';
import { startGetBills,startDeleteBill } from './Actions/bills';

const store=ConfigureStore()
console.log('state',store.getState())

store.subscribe(()=>{
  console.log('updated state',store.getState())
})

//
if(localStorage.getItem('token')){
  store.dispatch(startGetUser())
  store.dispatch(startGetProducts())
  store.dispatch(startGetCustomers())
  store.dispatch(startGetBills())
  store.dispatch(startDeleteBill())
}

ReactDOM.render(<Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
      </Provider>,
  document.getElementById('root')
);


