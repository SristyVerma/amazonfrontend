import React ,{useContext, useEffect,useState} from 'react';
import "./SingleProduct.css";
import { Divider } from '@chakra-ui/react';
import {useNavigate, useParams} from 'react-router-dom'
import { Logincontext } from "../../context/Contextprovider";
import axios from 'axios'
const SingleProduct = () => {
//for cart badge
const { account, setAccount } = useContext(Logincontext);

//useNavigatehook
const history=useNavigate('')

    const [inddata,setInddata]=useState([])
const {id}=useParams("")
const getindividiualdata=async ()=>{
    



const res= await axios.get(`/singleproduct/${id}`)
if(res.status!==201){
    console.log("no data available for this id")
}else{
    setInddata(res.data)
    


// console.log("singleproduct",res.data)
} 
   
}
console.log("new",inddata)

useEffect(()=>{getindividiualdata()
},[id])

// console.log("hi",inddata)




//addtocartfunction
//credential because to send cookies to backend and after
//that it is verified by secret key
const addtocart = async (id) => {
    //in inddata we are storing every details of that particular product
    console.log(id);
    const checkres = await fetch(`/addcart/${id}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            inddata
        }),
        credentials: "include"
    });
 
    const data1 = await checkres.json();
    // console.log(data1[1] +  'frontend data');
console.log(data1)
    if (checkres.status === 401||!data1) {
        alert("user invalid")
    } else {
        // alert("data added to cart");
        history('/cart')
        setAccount(data1)
        // history.push("/buynow");
    }
}




    return (
        //we need to write because we are calling function
        //on useEffect which runs at last so intially data is empty
        <div className="cart_section">
           {inddata && Object.keys(inddata).length &&
                <div className="cart_container">
                    <div className="left_cart">
                        <img src={inddata.detailUrl} alt="cart" />
                        <div className="cart_btn">
                            <button className="cart_btn1" onClick={()=>addtocart(inddata.id)}>Add to Cart</button>
                            <button className="cart_btn2">Buy Now</button>
                        </div>

                    </div>
                    <div className="right_cart">
                        <h3>{inddata.title.shortTitle}</h3>
                        <h4>{inddata.title.longTitle}</h4>
                        <Divider />
                        <p className="mrp">M.R.P. : <del>₹{inddata.price.mrp}</del></p>
                        <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹{inddata.price.cost}.00</span></p>
                        <p>You save : <span style={{ color: "#B12704" }}>  ₹{inddata.price.mrp - inddata.price.cost} ({inddata.price.discount}) </span></p>

                        <div className="discount_box">
                            <h5 >Discount : <span style={{ color: "#111" }}>{inddata.discount}</span> </h5>
                            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                        </div>
                        <p className="description">About the Iteam :{inddata.description} <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>This is a smartphone from Apple.</span></p>
                    </div>
                </div>
            


           }
            
        </div>
           
    )
}

export default SingleProduct