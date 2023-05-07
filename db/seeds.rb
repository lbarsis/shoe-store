require 'faker'

# Get a list of all the image files in the directory
# Define an array of image filenames
images = Dir.entries(Rails.root.join('client', 'public', 'assets', 'images', 'home')).select do |file|
  File.file?(Rails.root.join('client', 'public', 'assets', 'images', 'home', file)) && /\.(png|jpe?g|gif)$/i.match?(file)
end

# Seed the database with category data
5.times do
  Category.create!(
    name: Faker::Commerce.department(max: 2),
    description: Faker::Lorem.sentence(word_count: 4)
  )
end

# Seed the database with product data
10.times do
  Product.create!(
    sku: Faker::Number.unique.number(digits: 6),
    discount_percent: Faker::Number.between(from: 0, to: 50),
    inventory_qty: Faker::Number.between(from: 0, to: 100),
    units: Faker::Measurement.metric_weight,
    name: Faker::Commerce.product_name,
    brand: Faker::Company.name,
    description: Faker::Lorem.paragraph(sentence_count: 3),
    price: Faker::Commerce.price(range: 10..100),
    category: Category.all.sample,
    image_url: "/assets/images/home/#{images.sample}"
  )
end

# Seed the database with user data
User.create!(
  fname: 'John',
  lname: 'Doe',
  email: 'johndoe@example.com',
  password: 'password',
  is_admin: true,
  shipping_address: Faker::Address.full_address,
  billing_address: Faker::Address.full_address
)

10.times do
  User.create!(
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name,
    email: Faker::Internet.unique.email,
    password: 'password',
    is_admin: false,
    shipping_address: Faker::Address.full_address,
    billing_address: Faker::Address.full_address
  )
end
