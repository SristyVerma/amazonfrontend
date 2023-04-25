import React,{useState,useContext} from 'react'
import '../Signup/Signup.css'
import logo from '../../components/Apni_dukan_logo.png'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { Logincontext } from "../../context/Contextprovider";



const Login = () => {
  const { account, setAccount } = useContext(Logincontext);




  const [logdata, setLogdata] = useState({
    email: "",
    password: ""
});
const adddata=(e)=>{
  const {name,value}=e.target;
  setLogdata(()=>{
    return{
    ...logdata,
    [name]:value
  }})
}

const senddata=async(e)=>{
  
  e.preventDefault();
  const {email,password}=logdata
  try {
    const res = await axios.post('/login', {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log(res.data);

    if (res.status === 400 || !res.data) {
      // alert("Invalid Details 👎!");
      console.log("invalid details");
      alert("Invalid Details 👎!");
     
  } else {
    //so that when we login  we set the data to setaccount
      setAccount(res.data);
      setLogdata({ ...logdata, email: "", password: "" })
      // alert("Login Successfully done 😃!", {
      //     position: "top-center"
      // });
      alert("Login Successfully done 😃!");
  }
  } catch (error) {
      alert("Provide Correct Credential")
    console.error(error.message);
    // Handle the error here
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
  <h1>SignIn</h1>
  <div className="form_data">
    <label htmlFor="email">Email</label>
    <input value={logdata.email} onChange={adddata} type="text" name="email" id='email' />
  </div>
  <div className="form_data">
    <label htmlFor="Password">Password</label>
    <input value={logdata.password}  onChange={adddata} placeholder='Atleast 6 characters' type="password" name="password" id="password" />
  </div>
  <button className="signin_btn" onClick={senddata}>Submit</button>
</form>
{/* <ToastContainer /> */}
<div className="create_accountinfo">
  <p>New To Amazon</p>
  <Link to='/signup'><button>Create New Account</button></Link>
</div>
      </div>
    </section>
    </>
  )
}

export default Login