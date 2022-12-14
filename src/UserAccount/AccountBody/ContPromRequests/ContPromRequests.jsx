import React from 'react'
import './ContPromRequests.css'
function ContPromRequests(props) {
  return (
    <div>
        { props.promArr.length > 0 ?
            props.promArr.map((val,index)=>(
                <div className='request_item'>
                    <p>ID: {index}</p>
                    <p>Запрос от: {val.requester}</p>
                    <p>Желаемый магазин: {val.shop_address}</p>
                    <p>Статус: {val.request_status == true ? ("активна") : ("не активна")}</p>
                    {val.request_status == true ?
                     <button onClick={()=>{props.confirmRequestPromotion(index)}}>Подтвердить заявку</button> 
                    :
                    <></>}
                </div>   
            )) :
            (<>Пусто</>)
        }
    </div>
  )
}

export default ContPromRequests;
