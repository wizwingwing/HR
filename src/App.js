import React from 'react'
import Home from './component/page/index'
import Login from './component/page/login'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { getMoney } from './action/getMoney';

export default function App() {

  const [isLogin, setLogin] = React.useState(false)
  const [money, setMoney] = React.useState(undefined)

  React.useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (token) {
      setLogin(true)
      getMoney(setMoney)
    } else setLogin(false)
 }, [sessionStorage.getItem("token")])

 
  const ProtectedRoute = ({ comp: Component, ...rest }) => {
    if (isLogin)
      return (
        <Route
          {...rest}
          render={(props) => <Component {...rest} {...props} />}
        />
      );
    else return <Redirect to="/login" />;
  };

  const RedirectRoute = ({ comp: Component, ...rest }) => {
    if (!isLogin)
      return (
        <Route
          {...rest}
          render={(props) => <Component {...rest} {...props} />}
        />
      );
    else return <Redirect to="/" />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/">
          <Home setLogin={setLogin} money={money} />
        </ProtectedRoute>
        <RedirectRoute path="/login">
          <Login setLogin={setLogin} setMoney={setMoney} />
        </RedirectRoute>
      </Switch>
    </BrowserRouter>
  )
}
