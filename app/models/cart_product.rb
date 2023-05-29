class CartProduct < ApplicationRecord
  belongs_to :cart
  belongs_to :product

  # Validations
  validates :cart_id, :product_id, presence: true
  validates :quantity, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
