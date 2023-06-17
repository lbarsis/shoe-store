class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_products
  belongs_to :user
  has_many :order_products
  has_many :products
end
