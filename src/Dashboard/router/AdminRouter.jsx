import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import {DashMain} from '../core/DashMain'
//import { Dashboard } from '../components/Dashboard22'
import { Dashboard } from '../components/Dashboard'
import Product from '../components/Product';
import Customers from '../components/Customers';
import Advertisement from '../components/Advertisement';
import Dash from '../components/Dash';


export const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<DashMain/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="customers" element={<Customers/>}/>
        <Route path="advertisement" element={<Advertisement/>}/>
        <Route path="dash" element={<Dash/>}/>
        
      </Route>
    </Routes>
  );
};

