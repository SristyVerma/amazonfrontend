import React,{useEffect} from 'react'
import './home.css'
import SubNavbar from './SubNavbar'
import Banner from './Banner'
import  Slide  from './Slide'
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from '../../redux/action'


const Home = () => {
  //initial data is products
  const { products } = useSelector(state => state.getproductsdata);
  console.log(products);
 
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts());
  }, [dispatch])


  return (
 <>
 <SubNavbar/>
 <Banner/>
<div className="slide_part">
  <Slide title="Deal Of The Day" products={products}/>
  <Slide title='Best Seller' products={products}/>
  <Slide title="Clothing" products={products}/>
  <Slide title='Furniture' products={products}/>
</div>

 </>
  )
}

export default Home