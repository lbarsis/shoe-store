class CartSerializer < ActiveModel::Serializer
  belongs_to :user
  has_many :cart_products
  # has_many :products, through: :cart_products
end
