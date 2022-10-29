import React, {useContext} from 'react';

import {Directory} from "../../components/directory/directory.component";
import {Outlet} from "react-router-dom";
import {ProductsContext} from "../../contexts/products.context";

const Home = () => {

    const {categoriesMap} = useContext(ProductsContext)

    return (
        <div className="App">
            <Outlet />
            <Directory categories={categoriesMap} />
        </div>
    );
}

export default Home;
