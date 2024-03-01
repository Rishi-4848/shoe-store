import React from 'react';
import "./Price.css";
import Input from '../../components/Input';
const Price = ({handlechange}) => {
  return (
    <div className='ml'>
       <h2 className="sidebar-title price-title">
        Price
       </h2>
       <div>

       <Input
     handlechange={handlechange}
     value=""
     title="All"
     name="test2"
     />


       <Input
     handlechange={handlechange}
     value={50}
     title="$0-50"
     name="test2"
     />

<Input
     handlechange={handlechange}
     value={100}
     title="$50-100"
     name="test2"
     />

<Input
     handlechange={handlechange}
     value={150}
     title="$100-150"
     name="test2"
     />
      <Input
     handlechange={handlechange}
     value={200}
     title="over $150"
     name="test2"
     />


       </div>
    </div>
  );
}

export default Price;
