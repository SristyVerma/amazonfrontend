import React from 'react'
import { useEffect,useState } from 'react';

const Subtotal = ({item}) => {
    const [price, setPrice] = useState(0);
    const totalAmount = () => {
        let price = 0
        item.map((e) => {
            price += e.price.cost
        });
        setPrice(price)
    }

    //after every item added this should get be called
        useEffect(()=>{
            totalAmount()
        },[item])
    return (
        <div className="sub_item" style={{paddingTop:'100px'}}>
            <h3>Subtotal 
                ({item.length} items):<strong style={{ fontWeight: "700", color: "#111" }}> ₹{price}.00</strong>
                </h3>
        </div>
    )
}

export default Subtotal