import { useState } from "react";
import karatePhoto from "../assets/FB_IMG_1630259215728.jpg"

const price: number = 100;

function Products() {
    const [productCount, setproductCount] = useState(0);
    const handleAddProduct = () => {
        setproductCount(prevCount => {
            const newProductCount = (prevCount + 1)
            return newProductCount;
        })
    }

    return (<>
        <div>
            <img src={karatePhoto}></img>
            <p>Karate Trainings One Month</p>
            <p>Price:{price}</p>
            <button className='addToBasketbtn' onClick={handleAddProduct} value={productCount}>Add Product To Basket</button>
            <p>{productCount}</p>
        </div>
    </>
    )
}

export default Products
