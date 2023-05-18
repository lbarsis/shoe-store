class UserSerializer < ActiveModel::Serializer
  attributes :fname, :email
  has_one :cart, Serializer: CartSerializer

end
