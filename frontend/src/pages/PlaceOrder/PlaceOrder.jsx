import React, { useContext } from 'react'
import'./PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='tittle'>Delivery Information</p>
        <div className="multi-feilds">
          <input type='text' placeholder='Frist Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='street'/>
        <div className="multi-feilds">
          <input type='text' placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-feilds">
          <input type='text' placeholder='Zip code' />
          <input type="text" placeholder='Country ' />
        </div>
        <input type='text' placeholder='phone'/>
      </div>
        <div className="place order right">
        <div className="cart-total">
          <h2> Cart Totals</h2>
          <div>
          <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-detail">
              <b>total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>

            </div>
            
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>

        </div>
     

    </form>
  )
} 

export default PlaceOrder