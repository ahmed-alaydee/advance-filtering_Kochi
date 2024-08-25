import { useState } from "react";
import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Saidbar from "./Sidebar/Saidbar";
import "./index.css"
//Database
import data from "./db/Data";
import Card from "./components/Card";

function App() {
const[selectedCategory,setSelectedCategory]= useState(null);
const[query,setQuery]=useState("");


//----------input Filter---------



  
//----------Radio Filter---------

const handeChange = (event) =>{
  setSelectedCategory(event.target.value);
};


//----------Buttons Filter---------
  const handelClick = event =>{
    setSelectedCategory(event.target.value)
  }


function filterData(Products,selected,query){
let filterproducts = Products;


//Filtering input items.


//---------------Selected Filter-------
if(selected){
  filterproducts = filterproducts.filter(({category,color,company,
    newPrice,title}) => 
    category === selected || 
    color === selected || 
    company === selected ||
     newPrice === selected || 
     title === selected 
      )
};
return filterproducts.map(({img,title, star,reviews,prevPrice,newPrice})=>(
  <Card 
  key={Math.random()}
  img={img}
  title={title}
  star={star}
  reviews={reviews}
  prevPrice={prevPrice}
  newPrice={newPrice}
  />
))


};
 const result=filterData(data,selectedCategory,query)




  return (
  <>
  <Saidbar  handeChange={handeChange} />
  <Navbar/>
  <Recommended    handelClick={handelClick}/>
  <Products result={result}/>




  </>
  );
}

export default App;
