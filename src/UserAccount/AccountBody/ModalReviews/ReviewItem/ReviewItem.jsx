import React from 'react'
import ReplyItem from './ReplyItem';
import './ReviewItem.css'
function ReviewItem(props) {
    console.log(props.item)
  return (
    <div className='review_item_div'>
        <p>ID {props.id}</p>
        <p>Пользователь: {props.item.review_sender}</p>
        <p>{props.item.qtyStars} ★</p>
        <h3>{props.item.title}</h3>
        <p>{props.item.review_text}</p>
        {props.item.replies.length > 0 ? (<ReplyItem repliesArr={props.item.replies}/>) 
        :<></> 
        }
        
    </div>
  )
}

export default ReviewItem;
