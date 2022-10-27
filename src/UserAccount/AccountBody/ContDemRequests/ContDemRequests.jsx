import React from 'react'

function ContDemRequests(props) {

  return (
    <div>
    {props.demArr.length > 0 ? 
    
    props.demArr.map((val,index)=>(
        <div className='request_item'>
            <p>ID: {index}</p>
            <p>Запрос от: {val.requester}</p>
            <p>Статус: {val.request_status == true ? ("активна") : ("не активна")}</p>
            {val.request_status == true ?
                     <button onClick={()=>{props.confirmRequestDemotion(index)}}>Подтвердить заявку</button> 
                    :
                    <></>}
        </div>   
    )) :
    (<>Пусто</>)
}
    
    </div>
  )
}

export default ContDemRequests;
