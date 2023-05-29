class Product < ApplicationRecord
  has_many_attached :images
  has_many :order_products, dependent: :destroy
  has_many :orders, through: :order_products
  has_many :categories

  has_many :cart_products, dependent: :destroy
  has_many :carts, through: :cart_products

  has_many :product_categories, dependent: :destroy
  has_many :categories, through: :product_categories

  # Validations
  validates :sku, :inventory_qty, :name, :price, presence: true
  validates :sku, :inventory_qty, numericality: { only_integer: true }
  validates :discount_percent, :price, numericality: { greater_than_or_equal_to: 1.0 }
end
