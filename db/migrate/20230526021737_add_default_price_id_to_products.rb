class AddDefaultPriceIdToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :default_price, :string
  end
end
