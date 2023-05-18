class OrderSerializer < ActiveModel::Serializer
  belongs_to :user
  has_many :products
end
