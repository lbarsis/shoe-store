class CartSerializer < ActiveModel::Serializer
  attributes :cart_total_price, :cart_total_items
  belongs_to :user
  has_many :cart_products
  # has_many :products, through: :cart_products
end
