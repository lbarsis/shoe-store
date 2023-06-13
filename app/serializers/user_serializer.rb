class UserSerializer < ActiveModel::Serializer
  attributes :fname, :email, :is_admin
  has_one :cart
  has_many :cart_products
end
