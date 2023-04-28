
export const getProducts = ()=> async(dispatch)=>{
    try {
        const data = await fetch("https://calm-ruby-beetle-fez.cyclic.app/getproducts",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
        });

        const res = await data.json();
        console.log("response in action",res);
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res});
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response});
    }
}