import React ,{useState}from 'react'
import './Signup.css'
import logo from '../../components/Apni_dukan_logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const history=useNavigate()
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
});
const adddata=(e)=>{
  const {name,value}=e.target
  setUdata(()=>{
    return{
      ...udata,
      [name]:value
    }
  })
  console.log(udata)
}
// const senddata=async(e)=>{
// e.preventDefault()
// const { fname, email, mobile, password, cpassword } = udata;
// try {
//   const response = await axios.post('/register', {
//     fname, email, mobile, password, cpassword
//   }, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   const res = response.data;
//   // console.log("user signup details",res)
//   if (res.status === 422 || !res) {
//     alert("Invalid Details !");
// } else {
//     setUdata({
//         ...udata, fname: "", email: "",
//         mobile: "", password: "", cpassword: ""
//     });
//     alert("Registration Successfully done 😃!");
// }
// } catch (error) {
//   if(password.length<6){alert("Password length should be atleast 6")}
//   else if(password!==cpassword){alert("Your Passwords are not matching")}

//  console.log('error in signup',error)
// }
// }
const senddata = async (e) => {
  e.preventDefault();

  const { fname, email, mobile, password, cpassword } = udata;
  try {
      const res = await fetch("https://calm-ruby-beetle-fez.cyclic.app/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              fname, email, mobile, password, cpassword
          })
      });

      const data = await res.json();
      // console.log(data);
      if(fname===''||password===''||cpassword===''||email===''||mobile===''){
        return alert("Please fill all the data")
      }
if(password!==cpassword){return alert("Password doesn't match")}
if(password.length<6){return alert("Password length should be atleast 6")}
      if (res.status === 422 || !data) {
          alert("Please make sure email and mobile should be unique 👎!")
      } else {
          setUdata({
              ...udata, fname: "", email: "",
              mobile: "", password: "", cpassword: ""
          });
         alert("Registration Successfully done 😃!")
         history('/login')
      }
  } catch (error) {
    if(password!==cpassword){return alert("Password doesn't match")}
if(password.length<6){return alert("Password length should be atleast 6")}
      console.log("front end ka catch error hai" + error.message);
  }
}





  return (
    <>
      <section>
      <div className="sign_container">
        <div className="sign_header">
        <img src={logo} alt="logomissing" />
        </div>
       
      </div>
      <div className="sign_form">
<form >
  <h1>Sign-Up</h1>
  <div className="form_data">
    <label htmlFor="fname">Name</label>
    <input name='fname' onChange={adddata} type="text" value={udata.fname} id='fname' required />
  </div>
  <div className="form_data">
    <label htmlFor="email">Email</label>
    <input name='email' onChange={adddata} type="text" value={udata.email} id='email' required />
  </div>
  <div className="form_data">
    <label htmlFor="number">Mobile</label>
    <input name='mobile' onChange={adddata}  type="text" value={udata.mobile} id='mobile' required />
  </div>
  <div className="form_data">
    <label htmlFor="Password">Password</label>
    <input name='password' onChange={adddata}  type="password" value={udata.password} id="cpassword"  placeholder='Atleast 6 characters' required/>
  </div>
  <div className="form_data">
    <label htmlFor="Password"> Repeat Password</label>
    <input name='cpassword' onChange={adddata} type="password" value={udata.cpassword} id="password" required/>
  </div>
  <button onClick={senddata} className="signin_btn">Submit</button>
</form>
<div className="signin_info">
  <Link to='/login'><p>Already have an account?</p></Link>
  
</div>
      </div>
    </section>
    </>
  )
}

export default Signup