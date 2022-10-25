import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ShopsList from './ShopsList'
import classes from './AccountBody.module.css'
import ContPromRequests from './ContPromRequests'
import ContDemRequests from './ContDemRequests'
function AccountBody({web3, contractInstance, userAddress, userBalance,userRole}) {

  const [promArr, setPromArr] = useState([])
  const [demArr, setDemArr] = useState([])

  const [shopsArr, setShopsArr] = useState([])


  function requestPromotion(){
    const choosenShopAddress = prompt("Введите адрес магазина, куда желате устроиться")
    
    contractInstance.methods.getShops().call()
    .then(async (val)=>{
      console.log(val)
      for(let i = 0; i < val.length; i++){
        if(val[i].shop_address == choosenShopAddress){
          try{
            const val_req = await contractInstance.methods.requestToPromotion(choosenShopAddress).send({ from: currentAccountAddress, gas: 3000000 });
            console.log(val_req);
          }catch(er){
            console.log(er)
            alert("Вы уже подали заявку на повышение или не являетесь покупателем")
            return
          }
          } else if(i == val.length-1){
            alert("Магазина с таким адресом не существует")
          }
      }    
    })
   
  }
  function requestDemotion(){
    contractInstance.methods.getShops().call()
    .then((val)=>{
      val.forEach(async(el,index)=>{
        console.log(el.sellers)
        if(el.sellers.find(adr => adr == currentAccountAddress)){
          console.log(index)
          try {
            await contractInstance.methods.requestDemotion().send({ from: currentAccountAddress, gas: 3000000 })
            alert("Заявка успешно подана")
          } catch(er) {
            alert("Ошибка при отправке заявки: убедитесь, что вы не подавали заявку ранее")
            console.log(er.message.split(":")[2].slice(8));

          }
          
          return
        }
      })
    })
  }

  function confirmRequestPromotion(id){
    // console.log(id)
    contractInstance.methods.confirmPromotionRequest(id).send({from:currentAccountAddress, gas:3000000})
    .then((val)=>{
      console.log(val)
    }).then(()=>{
      contractInstance.methods.getPromotionRequests().call()
      .then((val)=>{
        console.log(val)
        setPromArr(val);
      })
    })
  }
  async function confirmRequestDemotion(){
    const id = prompt("Введите ID заявки на понижение");
    const dem_reqs = await contractInstance.methods.getDemotionRequests().call()
    console.log(dem_reqs)
    contractInstance.methods.getShops().call()
    .then((val)=>{
      val.forEach(async (el,index)=>{
        console.log(el.sellers)
        if(el.sellers.find(adr => adr == dem_reqs[id].requester)){
          console.log(index)
          await contractInstance.methods.confirmDemotionRequest(id,index).send({from:currentAccountAddress, gas:3000000})
          contractInstance.methods.getDemotionRequests().call()
          .then((val)=>{
            setDemArr(val);
          })
          return
        }
      })
    })
  }

  function addNewAdmin(){
    const adr = prompt("Введите адрес пользователя, которого хотите сделать администратором")

    contractInstance.methods.addNewAdmin(adr).send({from:currentAccountAddress, gas:3000000})
    .then((val)=>{
      console.log(val)
    })
  }

  function addNewShop(){
    const shop_address = prompt("Введите адрес будущего магазина")
    const city = prompt("Введите город будущего магазина")

    contractInstance.methods.addNewShop(shop_address, city).send({from:currentAccountAddress, gas:3000000})
    .then((val  )=>{
      console.log(val)
    })
    .then(async()=>{
      const shops_arr = await contractInstance.methods.getShops().call();
      setShopsArr(shops_arr);
    })
  }
  function deleteShop(){
    const id_shop = prompt("Введите ID удаляемого магазина");

    contractInstance.methods.deleteShop(id_shop).send({from:currentAccountAddress, gas:3000000})
    .then(async()=>{
      const shops_arr = await contractInstance.methods.getShops().call();
      setShopsArr(shops_arr);
    })
  }
  const currentAccountAddress = useSelector (state => state.app_data.currentAccountAddress)

  useEffect(()=>{
    contractInstance.methods.getPromotionRequests().call()
    .then((val)=>{
      console.log(val)
      setPromArr(val);
    })

    contractInstance.methods.getDemotionRequests().call()
    .then((val)=>{
      setDemArr(val);
    })
  },[])


  switch(userRole){
    case "admin":
      return (
      <div>
        <button className={classes.btn_adminFunc} onClick={()=>{
          const id = prompt("Введите ID подтверждаемой заявки");
          confirmRequestPromotion(id)
          }}>Подтвердить запрос на повышение </button>
        <button className={classes.btn_adminFunc} onClick={confirmRequestDemotion}>Подтвердить запрос на понижение </button>
        <button className={classes.btn_adminFunc} onClick={addNewAdmin}>Добавить нового администратора </button>
        <button className={classes.btn_adminFunc} onClick={addNewShop}>Добавить новый магазин </button>
        <button className={classes.btn_adminFunc} onClick={deleteShop}>Удалить магазин </button>

          <div className={classes.div_for_requests}>
            <div className={classes.div_promotion_requests}>
              <h4>Запросы на повышение</h4>
              <ContPromRequests promArr={promArr}/>
            </div>
            <div className={classes.div_demotion_requests}>
              <h4>Запросы на понижение</h4>
              <ContDemRequests demArr={demArr} />
            </div>

          </div>
       <h4 className={classes.h4_shopList}>Список магазинов</h4>
            <ShopsList contractInstance={contractInstance} web3={web3} role="admin" setShopsArr={setShopsArr} shopsArr={shopsArr}/>
      </div>

      )
    case "seller":
      return (
      <div>
        <button className={classes.btn_request_demotion} onClick={()=>{requestDemotion()}} >Подать заявку на понижение</button>
        <ShopsList contractInstance={contractInstance} web3={web3} role="seller" setShopsArr={setShopsArr} shopsArr={shopsArr}/>

      </div>
      )
    case "buyer":
      return (
      <div>
        <button className={classes.btn_request_promotion} onClick={requestPromotion}>Подать заявку на повышение</button>
        <ShopsList contractInstance={contractInstance} web3={web3} role="buyer" setShopsArr={setShopsArr} shopsArr={shopsArr}/>

      </div>
      )  
  }

  
}

export default AccountBody