import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ReplyItem from './ReplyItem';
import './ReviewItem.css'
function ReviewItem(props) {
  // console.log(props)
  const [likeState, setLikeState] = useState();
  const [dislikeState, setDislikeState] = useState();

  const [likesQty, setLikesQty] = useState();
  const [dislikesQty, setDislikesQty] = useState();
  
  const currentAccountAddress = useSelector(state => state.app_data.currentAccountAddress)

 async function clickLikeReview() {
    const review = await props.contractInstance.methods.getReview(props.idShop, props.id).call()
    console.log(review.likes_users.find(adr => adr == currentAccountAddress))
    if (!review.likes_users.find(adr => adr == currentAccountAddress)) {
      const like_response = await props.contractInstance.methods.likeReview(props.idShop, props.id).send({ from: currentAccountAddress, gas: 3000000 })
      setLikeState("clicked")
      console.log(like_response)
    } else {
      review.likes_users.forEach((el, index) => {
        if (el == currentAccountAddress) {
          props.contractInstance.methods.undoLikeReview(props.idShop, props.id,index).send({ from: currentAccountAddress, gas: 3000000 })
            .then((val) => {
              setLikeState("");
              console.log(val)
          })
          
        }
      })
    }
  }

  async function clickDislikeReview() {
    const review = await props.contractInstance.methods
      .getReview(props.idShop, props.id)
      .call();
    console.log(review.dislikes_users.find((adr) => adr == currentAccountAddress));
    if (!review.dislikes_users.find((adr) => adr == currentAccountAddress)) {
      const like_response = await props.contractInstance.methods
        .dislikeReview(props.idShop, props.id)
        .send({ from: currentAccountAddress, gas: 3000000 });
      setDislikeState("clicked");
      console.log(like_response);
    } else {
      review.dislikes_users.forEach((el, index) => {
        if (el == currentAccountAddress) {
          props.contractInstance.methods
            .undoLikeReview(props.idShop, props.id, index)
            .send({ from: currentAccountAddress, gas: 3000000 })
            .then((val) => {
              setDislikeState("");
              console.log(val);
            });
        }
      });
    }
  }

  useEffect(() => {
    props.contractInstance.methods.getReview(props.idShop, props.id).call()
      .then((review) => {
        if (!review.likes_users.find((adr) => adr == currentAccountAddress)) {
          setLikeState("clicked");
        } else if (!review.likes_users.find((adr) => adr == currentAccountAddress)) {
          setDislikeState("clicked");
        }  
    })
  },[props.contractInstance])
  return (
    <div className="review_item_div">
      <p>ID {props.id}</p>
      <p>Пользователь: {props.item.review_sender}</p>
      <p>{props.item.qtyStars} ★</p>
      <h3>{props.item.title}</h3>
      <p>{props.item.review_text}</p>
      {props.item.replies.length > 0 ? (
        <ReplyItem repliesArr={props.item.replies} />
      ) : (
        <></>
      )}
      {props.role == "buyer" ? (
        <div className="div_likes_dislikes">
          <button className={"btn_like" + " " + likeState} onClick={clickLikeReview} >Like</button>
          <button className={"btn_dislike" + " " + dislikeState} onClick={clickDislikeReview}>Dislike</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ReviewItem;
