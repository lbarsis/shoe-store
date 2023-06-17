class UserSerializer < ActiveModel::Serializer
  attributes :fname, :email, :is_admin, :stripe_customer_id
  has_one :cart
  has_many :cart_products
  has_many :orders
end
