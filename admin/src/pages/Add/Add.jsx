import React,{useState} from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {
 

  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name:"",
    price:"",
    category:"Salad"
})
const onChangeHandler = (event) =>{
  const name = event.target.name;
  const value = event.target.value;
  setData(data=>({...data,[name]:value})) 
}
const onSubmitHandler = async(event) =>{
  
    
}


  return (
    <div className='add'>
     <form className='flec-col' onSubmit={onSubmitHandler}>
       <div className="add-img-upload flex-col">
        <p>Upload Image</p>
        <label htmlFor='image'>
          <img src={image?URL.createObjectURL(image):assets.upload_area} alt=''/>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type='file' id="image" hidden required/>
      </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' /> 
        </div>
          <div className="add-product-description flex-col">
            <p>Product description</p>
            <textarea onChange={onChangeHandler} value={data.description} name='description'rows = '6' placeholder='Write content here' required ></textarea>
          </div>
          <div className="add-category-price">
            <div className="add-category flex col">
              <p>Product category</p>
              <select onChange={onChangeHandler} name='category'>
                <option value="Salad"></option>
                <option value="Rolls"></option>
                <option value="Desert"></option>
                <option value="Sandwich"></option>
                <option value="Cake"></option>
                <option value="Pure Veg"></option>
                <option value="Pasta"></option>
                <option value="Noodles"></option>
              </select>
            </div>
            <div className="add-price flex col">
              <p>Product Price</p>
              <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder = '$20'/>
            </div>
          </div>
          <button type='submit' className='add-button'>ADD</button>
     </form>
    </div>
  )
}

export default Add 