// import React from 'react'
// import Styles from './SubNavbar.module.css'
// import { Link } from 'react-router-dom'
// const SubNavbar = () => {
//   return (
    
//     <div className={Styles.headernav}>
//     <ul>
    
//       <li><Link to="#furniture">Furniture</Link></li>
//       <li><Link to="#clothes">Clothes</Link></li>
//       <li><Link to="#fitness">Fitness</Link></li>
//       <li><Link to="#beauty">Beauty</Link></li>
//       <li><Link to="#kids">Kids</Link></li>
//     </ul>
//   </div>
    
//   )
// }

// export default SubNavbar
import React from 'react'
import'./SubNavba.css'

const SubNavbar = () => {
    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <p><i className="fas fa-shopping-cart"></i> All</p>
                    <p>Mobiles</p>
                    <p>Best Sellers</p>
                    <p>Fashion</p>
                    <p>Customer Service</p>
                    <p>Electronics</p>
                    <p>Prime</p>
                    <p>Today's Deals</p>
                    <p>Amazon Pay</p>
                </div>
                {/* <div className="right_data">
                    <img src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png" alt="navdata" />
                </div> */}
            </div>
        </div>
    )
}

export default SubNavbar