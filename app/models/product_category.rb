class ProductCategory < ApplicationRecord
  belongs_to :category
  belongs_to :product

  validates :category_id, :product_id, presence: true
end
