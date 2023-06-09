class Product < ApplicationRecord
  has_one_attached :product_image
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
  validates :sku, :name, uniqueness: true
  validates :discount_percent, :price, numericality: { greater_than_or_equal_to: 0.0 }
  validates :price, numericality: { greater_than_or_equal_to: 10.0 }
  # validates :product_image, presence: true
end
