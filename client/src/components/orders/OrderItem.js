import React from 'react';

function OrderItem({ order }) {
  console.log(order)
  const displayOrderProduct = order.products?.map(product => {
    return (
      <div key={product.id}>
        <p>Name: {product.name}</p>
        <p>Cost: ${product.price/100}</p>
      </div>
    )
  })

  return (
    <div>
      Order Number: {order.id}
      {displayOrderProduct}
      Order Total: ${order.total/100}
    </div>
  );
}

export default OrderItem;
