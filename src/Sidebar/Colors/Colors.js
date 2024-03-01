import React from 'react';
import "./Colors.css";
import Input from '../../components/Input';

const Colors = ({handlechange}) => {
  return (
    <div className='ml'>
      
      <h2 className="sidebar-title color-title">
        Color
       </h2>

      <div>
    
<label className='sidebar-label-container'>
          <input onChange={handlechange} type='radio' value="" name="test1"/>
          <span className='checkmark all' ></span> All
        </label>

<Input
     handlechange={handlechange}
     value="black"
   title="black"
     name="test1"
     color="black"
     />

<Input
     handlechange={handlechange}
     value="blue"
     title="Blue"
     name="test2"
     color="blue"
     />

<Input
     handlechange={handlechange}
     value="red"
     title="Red"
     name="test2"
     color="red"
     />

<Input
     handlechange={handlechange}
     value="green"
     title="Green"
     name="test2"
     color="green"
     />

<label className='sidebar-label-container'>
          <input onChange={handlechange} type='radio' value="white" name="test1"/>
          <span className='checkmark' style={{backgroundColor: "white" , border : "2px solid black"}}></span> "white"
        </label>


</div>
    </div>
  );
}

export default Colors;
