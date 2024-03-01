import React from 'react';
import "./Recomended.css"
import Button from '../components/Button';

const Recomended = ({handleClick}) => {
  return (
    <>
    <div >
      <h2 className='recomended-title'>Recomended</h2>
      <div className='recomended-flex'>
       <Button title="All products" onClickHandler={handleClick} value=""/>
       <Button title="nike" onClickHandler={handleClick} value="Nike"/>
       <Button title="Adidas" onClickHandler={handleClick} value="Adidas"/>
       <Button title="Puma" onClickHandler={handleClick} value="Puma"/>
       <Button title="Vans" onClickHandler={handleClick} value="Vans"/>
      </div>
    </div>
    </>
  );
}

export default Recomended;
