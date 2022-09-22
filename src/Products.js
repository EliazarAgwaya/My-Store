import React from "react";

function Products({products}) {
    const theProducts = products.map((product) => {
        return (
            <div key={product.product_id}>
                <p>{product.name}</p>
                <p>{product.stock}</p>
                <p>{product.selling_price}</p>
            </div>
        )
    })
    
    return (
        <div>
            <h2>Products</h2>
            {theProducts}
        </div>
    )
}

export default Products