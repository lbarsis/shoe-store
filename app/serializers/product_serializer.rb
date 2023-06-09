class ProductSerializer < ActiveModel::Serializer
  attributes :id, :sku, :discount_percent, :inventory_qty, :units, :name, :brand, :description, :price, :image_url, :default_price, :stripe_product_id
end
