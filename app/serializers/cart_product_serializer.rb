class CartProductSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :product
  # belongs_to :cart
  # belongs_to :product, serializer: ProductSerializer

end
