import React from 'react'

export default function Home({setLogin, money}) {

    const logOut = () =>{
        sessionStorage.removeItem("token")
        setLogin(false)
    } 

    return (
        <div>
            ช้อมูล {money} ถ้ายังไม่ login จะไม่ให้เห็น
            <button onClick={logOut} >logout</button>
        </div>
    )
}
