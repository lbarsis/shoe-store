class CartSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  has_many :cart_products
  has_many :products, through: :cart_products, Serializer: ProductSerializer
end
