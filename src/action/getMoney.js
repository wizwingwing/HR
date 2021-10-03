import * as ajax from '../utils/ajex'

export const getMoney = async (setMoney) => {
   console.log(0)

    const res = await ajax.get('/money').then(res => res.data)
   console.log(res)
   if (res.money)   {
       console.log(1)
       setMoney(res.money)
   } else {
    console.log(2)
   }
}