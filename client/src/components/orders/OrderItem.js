import React from 'react';

function OrderItem({ order }) {
  console.log(order)
  const displayOrderProduct = order.order_products?.map(product => {
    return <p key={product.id}>{product.quantity}</p>
  })
  return (
    <div>
      {order.id}
      {displayOrderProduct}
    </div>
  );
}

export default OrderItem;
