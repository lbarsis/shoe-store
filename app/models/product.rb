class Product < ApplicationRecord
  has_many :order_products
  has_many :orders, through: :order_products
  has_many :categories

  has_many :cart_products
  has_many :carts, through: :cart_products

  has_many :product_categories
  has_many :categories, through: :product_categories
end
