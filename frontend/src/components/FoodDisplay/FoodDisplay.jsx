import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'



const FoodDisplay = ({category}) => {
    const { foodList } = useContext(StoreContext)
  return (
    <div className='food_Display' id='food_display'>
        <h2>Top dishes near you</h2>
        <div className='food-display-list'>
          {foodList.map((item,index)=>{
             if(category==="All"|| category===item.category){

             
            return <FoodItem key={index} id={item._id} description={item.description} price={item.price} image={item.image} name={item.name}/>
             }
          }
        )}
        </div>
    </div>
  )
}

export default FoodDisplay