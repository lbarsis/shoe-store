import React, {useContext} from 'react';
import { OrdersContext } from '../../context/ordersContext';
import OrderItem from './OrderItem';

function Orders() {
  const { orders } = useContext(OrdersContext)
  const displayOrders = orders.map(order => {
    return <OrderItem key={order.id} order={order}/>
  })
  return (
    <div>
      {displayOrders}
    </div>
  );
}

export default Orders;
