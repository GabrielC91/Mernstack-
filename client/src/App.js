import React, {useState, useEffect} from "react";
import axios from 'axios';  
import './App.css';


function App() {
    const [foodName, setFoodName] = useState ('');
    const [Orders, setOrders] = useState (0);
    const [foodList, setFoodList] = useState([])
    const [newFoodName, setNewFoodName] = useState('')

    useEffect(() => {
      axios.get("http://localhost:8001/read").then((response) => {
       setFoodList(response.data);
    });
    }, []);


    const addToList = () => {
      console.log(foodName + Orders);
      axios.post("http://localhost:8001/insert", {
        foodName: foodName, 
        Orders: Orders,
      });
     };


     const updateFood = (id) => {
       axios.put("http://localhost:8001/update", {
         id: id,
         newFoodName: newFoodName,
     });
    };
    const deleteFood = (id) => {
      axios.delete('http://localhost:8001/delete/${id}')
    };
return (
    <div className="container"> 

      <h1>Mexicos Kitchen</h1>
      <label>Food Order #:</label>
      <input type="text" onChange = {(event) => {
        setFoodName(event.target.value);
      }}
         />
      <label>How many Orders:</label>
      <input type="number" onChange = {(event) => {
        setOrders(event.target.value);
      }}
        />
         
      <button onClick={addToList}>Add to the Order</button>
        
      <h1>Food List</h1>
      {foodList.map((val, key) => {
          return (
          <div key={key} className="food"> 
             <h1> {val.foodName} </h1> 
             <h1>{val.Orders}</h1> 
             <input type="text" 
             placeholder="New Food Name.."
             onChange={(event) => {
               setNewFoodName(event.target.value);
             }} 
             />
             <button onClick={() => updateFood(val._id)}>Update</button>
             <button onClick={() => deleteFood(val._id)}>Delete</button>
          </div>
          
          );
      })}
    
    </div>
  );
}

export default App;
