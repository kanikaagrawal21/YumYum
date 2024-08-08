import React, { useContext,  useEffect,  useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotalCartAmount,token,food_list,cartItems,url, } = useContext(StoreContext);

  const[data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:""

  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const placeOrder = async (event) => { 
    event.preventDefault();
    let orderItems = [];
    food_list.map(()=>{
      if (cartItems[cartItems._id>0]) {
           let itemInfo = item;
           itemInfo["quantity"] = cartItems[item._id];
           orderItems.push(itemInfo);        
      }
    })
    let orderData  = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2
    }
    let response = await axios.post(url+"/api/order/place",orderData,{Headers:{token}})
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error")
    }
  }
   const navigate = useNavigate();

   useEffect(()=>{
    if (!token){
      navigate('/cart')
    }
     else if(getTotalCartAmount()===0){
      navigate('/cart')
     }
   },[token])

  return (
    <form  onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="tittle">Delivery Information</p>
        <div className="multi-feilds">
          <input required name='firstName' onChange={onChangeHandler} value = {data.firstName}type="text" placeholder="Frist Name" />
          <input required name='lastName' onChange={onChangeHandler}  value = {data.lastName}type="text" placeholder="Last Name" />
        </div>
        <input required name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email address" />
        <input required name ="street" onChange={onChangeHandler} value={data.email} type="text" placeholder="street" />
        <div className="multi-feilds">
          <input  required name="city" onChange={onChangeHandler} value = {data.city} type="text" placeholder="City" />
          <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
        </div>
        <div  className="multi-feilds">
          <input required name="zipCode" onChange={onChangeHandler} value={data.zipCode} type="text" placeholder="Zip code" />
          <input  required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country " />
        </div>
        <input required name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="phone" />
      </div>
      <div className="place order right">
        <div className="cart-total">
          <h2> Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type = 'submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
