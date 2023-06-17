class OrderSerializer < ActiveModel::Serializer
  attributes :id, :products
  belongs_to :user
  has_many :products
end
