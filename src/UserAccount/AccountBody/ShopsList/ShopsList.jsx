import React, { useEffect, useState } from 'react'
import ShopsListItem from './ShopsListItem';

function ShopsList(props) {


    function updateShopsArr(test){
        console.log(test)
        props.contractInstance.methods.getShops().call()
        .then((val)=>{
            console.log(val)
            props.setShopsArr(val);
            console.log(props.shopsArr)
        })
    }

    useEffect(()=>{
        props.contractInstance.methods.getShops().call()
        .then((val)=>{
            props.setShopsArr(val);
            console.log(props.shopsArr)
        })
    },[])
    useEffect(()=>{
        console.log(props.shopsArr)
    },[props.shopsArr])

  return (
    <ul>
        {props.shopsArr.map((el,index)=>(
            <ShopsListItem shop={props.shopsArr[index]} forRole={props.role} updateShopsArr={updateShopsArr} contractInstance={props.contractInstance} index={index} deleteShop={props.deleteShop}/>
        ))}
    </ul>
  )
}

export default ShopsList;
