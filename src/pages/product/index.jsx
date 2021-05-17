import React from 'react'
import { useParams } from 'react-router';

const Product = () => {

    const params = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("https://pt.openfoodfacts.org/api/produto/" + params.id )
        .then(response => response.json())
        .then(response => {
            setProduct(response);
        });
        
    }, [params.id])

    console.log(product);

    return (
        <div>
            <p>Product</p>
        </div>
    )
}

export default Product;
