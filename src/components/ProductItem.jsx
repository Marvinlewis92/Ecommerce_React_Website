import { useState } from "react";
import styles from "../ProductItem.module.css"

function ProductItem({ item, index }) {
    return (
        <div className= {styles.items}>
            <h1>{item.name}</h1>
            <img src={item.pic} alt=""/>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
        </div>
    );
}

export default ProductItem