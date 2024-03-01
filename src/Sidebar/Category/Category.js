import React from 'react';
import "./Category.css";
import Input from '../../components/Input';

const Category = ({handlechange}) => {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>
      <div>

      <Input
     handlechange={handlechange}
     value=""
     title="All"
     name="test"
     />
       
     <Input
     handlechange={handlechange}
     value="sneakers"
     title="Sneakers"
     name="test"
     />
        <Input
     handlechange={handlechange}
     value="flats"
     title="Flats"
     name="test"
     />
         <Input
     handlechange={handlechange}
     value="heels"
     title="Heels"
     name="test"
     />
         <Input
     handlechange={handlechange}
     value="sandals"
     title="Sandals"
     name="test"
     />

      </div>
    </>
  );
}

export default Category;
