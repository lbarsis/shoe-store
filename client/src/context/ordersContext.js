import { createContext, useState, useEffect } from "react";
// import {UserContext} from './userContext'

const OrdersContext = createContext({})

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/orders").then((r) => {
      // console.log(r)
      if (r.ok) {
        r.json().then((orders) => {
          setOrders(orders)
        });
      }
    });
  }, []);

    return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrdersContext.Provider>
  )

}

export { OrdersContext, OrdersProvider };
