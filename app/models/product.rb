class Product < ApplicationRecord
  has_many :order_products
  has_many :orders, through: :order_products
  belongs_to :category

  has_many :cart_products
  has_many :carts, through: :cart_products
end
