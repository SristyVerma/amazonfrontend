import React, { useState, useContext } from "react";
import "../Signup/Signup.css";
import logo from "../../components/Apni_dukan_logo.png";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Logincontext } from "../../context/Contextprovider";

const Login = () => {
  const { account, setAccount } = useContext(Logincontext);

  const [logdata, setLogdata] = useState({
    email: "",
    password: "",
  });
  const adddata = (e) => {
    const { name, value } = e.target;
    setLogdata(() => {
      return {
        ...logdata,
        [name]: value,
      };
    });
  };
  const senddata = async (e) => {
    e.preventDefault();

    const { email, password } = logdata;
    // console.log(email);
    try {
        const res = await fetch("https://calm-ruby-beetle-fez.cyclic.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
console.log("before login")

        const data = await res.json();
        // console.log(data);

        if (res.status === 400 || !data) {
            console.log("invalid details");
            alert("Invalid Details 👎!");
        } else {
            setAccount(data);
            setLogdata({ ...logdata, email: "", password: "" })
            alert("Login Successfully done 😃!");
        }
    } catch (error) {
        console.log("Login page ka error" + error.message);
    }
};

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src={logo} alt="logomissing" />
          </div>
        </div>
        <div className="sign_form">
          <form>
            <h1>SignIn</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                value={logdata.email}
                onChange={adddata}
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="Password">Password</label>
              <input
                value={logdata.password}
                onChange={adddata}
                placeholder="Atleast 6 characters"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button className="signin_btn" onClick={senddata}>
              Submit
            </button>
          </form>
          {/* <ToastContainer /> */}
          <div className="create_accountinfo">
            <p>New To Apni Dukan</p>
            <Link to="/signup">
              <button>Create New Account</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
