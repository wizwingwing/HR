import React from 'react'
import { getMoney } from '../../action/getMoney'
import * as ajax from '../../utils/ajex'

export default function Login({setLogin, setMoney}) {

    const [username, setUsername] = React.useState(undefined)
    const [password, setPassword] = React.useState(undefined)

    const handleLogin = async () => {
        const body = { username, password }
        const isLogin = await ajax.login(body)
        if (isLogin) {
            setLogin(true)
            getMoney(setMoney)
        }
    }

    return (
        <div>
            <p>username</p>
            <input type="text" onChange={e=>setUsername(e.target.value)} />
            <p>password</p>
            <input type="password" onChange={e=>setPassword(e.target.value)} />
            <br/>
            <button onClick={handleLogin} >login</button>
        </div>
    )
}
