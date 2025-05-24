import { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList({ list }) {
    return (
        <>
            {list.map((value, index) => (
                <ProductItem key={index} item={value} />
            ))}
        </>
    );
}

export default ProductList