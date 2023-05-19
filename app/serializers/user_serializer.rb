class UserSerializer < ActiveModel::Serializer
  attributes :fname, :email
  has_one :cart
  has_many :cart_products
end
