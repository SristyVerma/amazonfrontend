import React ,{useContext} from 'react'
import { Logincontext } from '../../context/Contextprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Option = ({deletedataid,getupdateddatafterdelete}) => {
    const { account, setAccount } = useContext(Logincontext);
    const removedata = async (id) => {
        try {

            //we are passing same id as we are getting in the props
            const res = await fetch(`https://calm-ruby-beetle-fez.cyclic.app/remove/${deletedataid}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            // console.log(data);

            if (res.status === 400 || !data) {
                console.log("error aai remove time pr");
            } else {
                setAccount(data)
                getupdateddatafterdelete();
                toast.success("Item removed from cart 😃!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log(error);
        }

    }



    return (
        <div className="add_remove_select" key={Date.now()}>
            <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <p  style={{ cursor: "pointer" }} onClick={()=>removedata({deletedataid})}>Delete</p><span>|</span>
            <p className="forremovemedia">Save Or Later</p><span>|</span>
            <p className="forremovemedia">See More like this</p>
            <ToastContainer />
        </div>

    )
}

export default Option;