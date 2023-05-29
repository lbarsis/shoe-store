class Cart < ApplicationRecord
  belongs_to :user
  has_many :cart_products, dependent: :destroy
  has_many :products, through: :cart_products

  # Validations
  validates :user_id, presence: true

  def cart_total_price
    @total = 0
    self.cart_products.each do |cp|
      @total += ( cp.product.price/100 * cp.quantity)
    end
    return @total
  end
  
  def cart_total_items
    @total = 0
    self.cart_products.each do |cp|
      @total += cp.quantity
    end
    return @total
  end
end
