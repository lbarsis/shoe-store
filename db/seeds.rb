15.times do
  User.create(
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: Faker::Internet.password(min_length: 6),
    is_admin: Faker::Boolean.boolean,
    shipping_address: Faker::Address.full_address,
    billing_address: Faker::Address.full_address
  )
end

5.times do
  Category.create(
    name: Faker::Commerce.department,
    description: Faker::Lorem.paragraph
  )
end

10.times do
  Product.create(
    sku: Faker::Number.number(digits: 6),
    discount_percent: Faker::Number.between(from: 0, to: 50),
    inventory_qty: Faker::Number.between(from: 0, to: 100),
    units: ["EA", "LF", "BOX"].sample,
    name: Faker::Commerce.product_name,
    brand: Faker::Company.name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price(range: 50..500.0, as_string: false),
    category_id: Category.all.sample.id
  )
end

7.times do
  Order.create(
    total: Faker::Commerce.price(range: 50..500.0, as_string: false),
    shipping_address: Faker::Address.full_address,
    billing_address: Faker::Address.full_address,
    user_id: User.all.sample.id
  )
end

20.times do
  OrderProduct.create(
    quantity: Faker::Number.between(from: 1, to: 5),
    order_id: Order.all.sample.id,
    product_id: Product.all.sample.id
  )
end