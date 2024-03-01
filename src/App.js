import React, { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recomended from './Recomended/Recomended';
import Sidebar from './Sidebar/Sidebar';

import products from "./db/data"
import Card from './components/Card';

const App = () => {

  const [selectedCategory,setSelectCategory] = useState(null)
  const [query,setQuery] = useState("")

  const handleInputChange = (event)=>{
    setQuery(event.target.value)

 
  }

  //input filters
  const filtereditems = products.filter((product) => product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))


  //radio filters

  const handleChange = (event)=>{
    setSelectCategory(event.target.value)
  }

  //buttons filter

  const handleClick = (event)=>{
    setSelectCategory(event.target.value)
  }

  function filteredData (products,selected,query){

    let filteredProducts = products;

    if(query){
      filteredProducts = filtereditems
    }

    if(selected){
       filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title})=>
       category === selected || 
       color === selected || 
       company === selected || 
       newPrice===selected
       || title === selected )
    }

    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice,company})=>
    <Card key={Math.random()}
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    prevPrice={prevPrice}
    newPrice = {newPrice}
    company={company}
    />
    )
  }

 const result = filteredData(products,selectedCategory,query)

  return (
    <>
   
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Sidebar handlechange={handleChange}/>
      <Recomended handleClick={handleClick}/>
      <Products result={result}/>
      
    </>
  );
}

export default App;

