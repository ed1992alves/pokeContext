import React from 'react'
import { useParams } from 'react-router';

import {ProductContext} from "../../context/ProductContext"

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useContext(ProductContext);

    //NAO È ESTE FILE -.-

    useEffect(() => {
        fetch("https://pt.openfoodfacts.org/categoria/" + id + "?json=true")
        .then(response => response.json())
        .then(response => {
            response.map((product)=>{
                //setProduct(product);
            })
        });
        
    }, [id])


    return (
        <div>
            <div className="product-card">
                {product?.map((product)=>{
                        <p>{product.product_name}</p>
                    })
                }
            </div>
        </div>
    )
}

export default Product;
