class CartProductSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  # belongs_to :cart
  # has_one :product
end
