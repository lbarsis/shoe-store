class UserSerializer < ActiveModel::Serializer
  attributes :fname, :email, :cart_products
  # has_one :cart
end
