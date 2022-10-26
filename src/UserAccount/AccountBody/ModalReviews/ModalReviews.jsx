import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './ModalReviews.css'
import ReviewItem from './ReviewItem'

function ModalReviews(props) {
    // console.log(props)

    const [reviewsArr, setReviewsArr] = useState([])
    const currentAccountAddress = useSelector (state => state.app_data.currentAccountAddress)
    
    const [qtyStars, setQtyStars] = useState()
    const [title, setTitle] = useState()
    const [reviewText, setReviewText] = useState()


    const [idReview, setIdReview] = useState();
    const [textReply, setTextReply] = useState();

    useEffect(()=>{
    console.log(props)
    setReviewsArr(props.reviews)
    },[])

    useEffect(()=>{
        setReviewsArr(props.reviews)
    }, [props.reviews])


  return (
    <div className={props.status ? "modal_reviews active" : "modal_reviews"}>
        <div className='modal_reviews_content'>
            <img src="./imgs/close.png"alt="" className='img_modal_review_cross' onClick={()=>{props.setStatus(false)}}/>
            <p>Магазин № {props.id}</p>
            <p>Адрес магазина {props.shop_address}</p>
            <p>Город {props.city}</p>
            <p className='p_sellers'>Продавцы: </p>
            {
                props.sellers.map((el)=>(
                    <p> • {el}</p>
                ))
            }
            <p className='p_reviews'>Отзывы: </p>
            <div className='reviews_div'>
                {
                    reviewsArr.length == 0 ? "Нет отзывов" : reviewsArr.map((el,index)=>(
                        <ReviewItem item={el} id={index} role={props.role} contractInstance={props.contractInstance} idShop={props.id} />
                    ))
                }
            </div>
            {props.role == "buyer" ? 
            (
            <div className='leave_review_div'>
                <p>Оставить отзыв</p>
                <input type="text" placeholder='Кол-во звезд' className='input_stars' onInput={(event)=>{setQtyStars(event.target.value)}} value={qtyStars}/>
                <input type="text" placeholder='Заголовок' onInput={(event)=>{setTitle(event.target.value)}} value={title} />
                <textarea name="" id="" cols="30" rows="10" placeholder='Текст отзыва' className='reviews_textArea' onInput={(event)=>{setReviewText(event.target.value)}} value={reviewText}> </textarea>
                <button className='btn_leaveReview' onClick={()=>{
                    setQtyStars("")
                    setTitle("")
                    setReviewText("")
                    props.contractInstance.methods.leaveReview(props.id, qtyStars, title, reviewText).send({from:currentAccountAddress, gas: 3000000})
                    .then(()=>{
                        props.updateShopsArr()
                    })
                }
                    }>Оставить отзыв</button>
            </div>
            ) : props.role == "seller" ?
            (
            <div className='leave_reply_div'>
                <p>Ответить на отзыв</p>
                <input type="text" placeholder='ID отзыва' onInput={(event)=>{setIdReview(event.target.value)}} value={idReview} />
                <input name="" id="" cols="30" rows="10" placeholder='Текст ответа' className='reply_input' onInput={(event)=>{setTextReply(event.target.value)}} value={textReply}/> 
                <button className='btn_leaveReply' onClick={()=>{
                    props.contractInstance.methods.leaveReply(idReview,textReply).send({from:currentAccountAddress, gas: 3000000})
                    .then(()=>{
                        props.updateShopsArr()
                        setIdReview("")
                        setTextReply("")
                    })
                }
                    }>Ответить</button>
            </div>
            ) : (
               <></>
            )
        }
            
        </div>
    </div>
  )
}

export default ModalReviews;
