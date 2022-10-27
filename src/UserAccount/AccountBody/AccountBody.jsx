import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ShopsList from './ShopsList'
import classes from './AccountBody.module.css'
import ContPromRequests from './ContPromRequests'
import ContDemRequests from './ContDemRequests'
function AccountBody({web3, contractInstance, userAddress, userBalance,userRole, user, setUser}) {

  const [promArr, setPromArr] = useState([])
  const [demArr, setDemArr] = useState([])

  const [shopsArr, setShopsArr] = useState([])
  const [choosenShopToPromotion, setChoosenShopToPromotion] = useState();
  const [choosenFutureAdmin, setChoosenFutureAdmin] = useState();

  const registredUsersArray = useSelector (state => state.app_data.registredUsersArray)

  const [notAdmins, setNotAdmins] = useState([]);


  function requestPromotion(){
    
    contractInstance.methods.getShops().call()
    .then(async (val)=>{
      console.log(val)
      for(let i = 0; i < val.length; i++){
        if(val[i].shop_address == choosenShopToPromotion){
          try{
            const val_req = await contractInstance.methods.requestToPromotion(choosenShopToPromotion).send({ from: currentAccountAddress, gas: 3000000 });
            console.log(val_req);
            return
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
  async function confirmRequestDemotion(id){
    const dem_reqs = await contractInstance.methods.getDemotionRequests().call()
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
    // const adr = prompt("Введите адрес пользователя, которого хотите сделать администратором")
    const adr = choosenFutureAdmin;
    contractInstance.methods.addNewAdmin(adr).send({from:currentAccountAddress, gas:3000000})
    .then((val)=>{
      console.log(val)
    }).then(()=>{
      fillNotAdminsArray()
    })
  }

  function fillNotAdminsArray(){
    let not_admins = [];
    registredUsersArray.forEach(async(el)=>{
      let user = await contractInstance.methods.getUser(el).call();
      if(user.role != "admin"){
        not_admins.push(el)
      }
     })
     setNotAdmins(not_admins)
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
  function deleteShop(id_shop){
    // const id_shop = prompt("Введите ID удаляемого магазина");
    const confirmation = window.confirm("Подтвердите удаление магазина")
    if(confirmation){
      contractInstance.methods.deleteShop(id_shop).send({from:currentAccountAddress, gas:3000000})
      .then(async()=>{
        const shops_arr = await contractInstance.methods.getShops().call();
        setShopsArr(shops_arr);
      })
    }
   
  }
  function switchToBuyer(){
    contractInstance.methods.switchToBuyer().send({from:currentAccountAddress, gas:3000000})
    .then(()=>{
      contractInstance.methods.users(currentAccountAddress).call()
      .then((val)=>{
        setUser(val)
      })
    })
  }
  function switchRoleBack(){
    contractInstance.methods.switchRoleBack().send({from:currentAccountAddress, gas:3000000})
    .then(()=>{
      contractInstance.methods.users(currentAccountAddress).call()
      .then((val)=>{
        setUser(val)
      })
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

    contractInstance.methods.getShops().call()
    .then((val)=>{
      setShopsArr(val);
    })

    let not_admins = [];
    registredUsersArray.forEach(async(el)=>{
      let user = await contractInstance.methods.getUser(el).call();
      if(user.role != "admin"){
        not_admins.push(el)
      }
     })
     setNotAdmins(not_admins)
    // 
  },[])


  switch(userRole){
    case "admin":
      return (
      <div>
        <div className={classes.admin_btns}>

        <button className={classes.btn_adminFunc} onClick={addNewShop}>Добавить новый магазин </button>
        <button className={classes.btn_adminFunc} onClick={switchToBuyer  }>Переключиться на роль Покупатель </button>
        </div>
        <div className={classes.div_addAdmin}>
        <button className={classes.btn_adminFunc} onClick={addNewAdmin}>Добавить нового администратора </button>
          <select name="" id="" onChange={(event)=>{setChoosenFutureAdmin(event.target[event.target.selectedIndex].textContent)}}>
          <option value="title" selected disabled>Выберите пользователя</option>
            {
            notAdmins.map((el)=>(
              <option>{el}</option>
            ))
            }
          </select>
        </div>
        
          <div className={classes.div_for_requests}>
            <div className={classes.div_promotion_requests}>
              <h4>Запросы на повышение</h4>
              <ContPromRequests promArr={promArr} confirmRequestPromotion={confirmRequestPromotion}/>
            </div>
            <div className={classes.div_demotion_requests}>
              <h4>Запросы на понижение</h4>
              <ContDemRequests demArr={demArr} confirmRequestDemotion={confirmRequestDemotion}/>
            </div>

          </div>
       <h4 className={classes.h4_shopList}>Список магазинов</h4>
            <ShopsList contractInstance={contractInstance} web3={web3} role="admin" setShopsArr={setShopsArr} shopsArr={shopsArr} deleteShop={deleteShop}/>
      </div>

      )
    case "seller":
      return (
      <div>
        <button className={classes.btn_adminFunc} onClick={switchToBuyer  }>Переключиться на роль Покупатель </button>
        <button className={classes.btn_request_demotion} onClick={()=>{requestDemotion()}} >Подать заявку на понижение</button>
        <ShopsList contractInstance={contractInstance} web3={web3} role="seller" setShopsArr={setShopsArr} shopsArr={shopsArr}/>

      </div>
      )
    case "buyer":
      return (
      <div>
        {user.role != "buyer" ? <button onClick={switchRoleBack}>Переключиться к основной роли</button> : <></>}
        <div className={classes.div_choooseShop}>
          <p>Подать заявку на повышение</p>
          <button className={classes.btn_request_promotion} onClick={requestPromotion}>Подать заявку на повышение</button>
          <select name="" id="" onChange={(event)=>{setChoosenShopToPromotion(event.target[event.target.selectedIndex].textContent)}}>
          <option value="title" selected disabled>Выберите магазин</option>
            {shopsArr.map((el,index)=>(
              <option value={index}>{el.shop_address}</option>
            ))}
          </select>
        </div>
        <ShopsList contractInstance={contractInstance} web3={web3} role="buyer" setShopsArr={setShopsArr} shopsArr={shopsArr}/>

      </div>
      )  
  }

  
}

export default AccountBody