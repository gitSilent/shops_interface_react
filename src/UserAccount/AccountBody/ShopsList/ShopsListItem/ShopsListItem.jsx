import React, { useEffect, useState } from 'react'
import ModalReviews from '../../ModalReviews';
import classes from './ShopsListItem.module.css'
function ShopsListItem(props) {
    // console.log(props.shopsArr)

    const [modalReviewsStatus, setModalReviewsStatus ] = useState(false);

    useEffect(()=>{
        console.log(props.shop)
        console.log(props)
    },[])

    // switch (props.forRole){
    //     case "buyer":
    // }
  return (
    <div>
      <li>
        <div className={classes.div_item}>
            <p>ID {props.index}</p>
            <p>Адрес: {props.shop.shop_address}</p>
            <p>Город: {props.shop.city}</p>
            <button onClick={()=>{
              setModalReviewsStatus(true);
            }} className={classes.btn_showReviews}>Отзывы</button>
            {props.forRole == "admin" ? (
              <button className={classes.btn_delete} onClick={()=>{props.deleteShop(props.index)}}>Удалить магазин</button>
            ) : 
            <></>}
        </div>
      </li>
      <ModalReviews status={modalReviewsStatus}
       setStatus={setModalReviewsStatus}
       id = {props.shop.id_shop}
       shop_address = {props.shop.shop_address}
       city = {props.shop.city}
       sellers = {props.shop.sellers}
       reviews = {props.shop.reviews}
       updateShopsArr={props.updateShopsArr}
       contractInstance={props.contractInstance}
       role={props.forRole}/>
    </div>
   
  )
}

export default ShopsListItem;
