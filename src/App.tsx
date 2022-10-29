import React from 'react';

import Home from "./routes/home/home.component"
import './categories.styles.scss'
import {Routes, Route } from 'react-router-dom'
import {Navigation} from "./routes/navigation/navigation.component";
import {AuthenticationPage} from "./routes/authentication/authentication.component";
import {CategoriesPreview} from './routes/categories-preview/categories-preview.component'
import {CheckOut} from "./routes/checkout/checkout.component";
import {Shop} from "./routes/shop/shop.component";

export enum ButtonType {
    GOOGLE = 'google-sign-in',
    INVERTED = 'inverted',
    DEFAULT = ''
}

const App = () => {

  return (
      <Routes>
          <Route path='/' element={<Navigation />}>
              <Route index={true} element={<Home />}/>
              <Route path='shop/*' element={<Shop/>}/>
              <Route path='sign-in' element={<AuthenticationPage/>}/>
              <Route path='checkout' element={<CheckOut/>}/>
          </Route>
      </Routes>
  );
}

export default App;
