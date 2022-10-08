import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
const[data,setData] = useState([])
 const getProducts = ()=>{
  axios.get("https://ecom-rest-apis.herokuapp.com/api/products").then(data=>setData(data?.data))
 }
 console.log(data)

 useEffect(()=>{
getProducts()
 },[])
  return (

<>
<nav className="navbar bg-light ">
  <div className="container-fluid">
    <h1 className="navbar-text text-center text-primary ">
      Pizza House
    </h1 >
  </div>
</nav>


<div className="container d-flex flex-wrap ">
  {
     data?.map((item,index)=> <Card key={index} item={item} />)
  }
    </div>
</>

    
     
  );
}

export default App;
