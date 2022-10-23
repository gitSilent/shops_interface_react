import React from 'react'
import './ReplyItem.css'
function ReplyItem(props) {
    console.log(props.repliesArr)
  return (
    <div className='replies_div'>
        <p>Ответы</p>
        {
            props.repliesArr.map((el)=>(
                <div className='reply_div'>{el.reply_text}</div>
            ))
        }
    </div>
  )
}

export default ReplyItem;
