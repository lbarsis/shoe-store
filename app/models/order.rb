class Order < ApplicationRecord
  belongs_to :user
  has_many :order_products, dependent: :destroy
  has_many :products, through: :order_products

  validates :user_id, :created_at, :updated_at, presence: true
  validates :total, numericality: { greater_than_or_equal_to: 1.0 }
end
