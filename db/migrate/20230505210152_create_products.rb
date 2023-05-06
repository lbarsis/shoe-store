class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.integer :sku
      t.float :discount_percent
      t.integer :inventory_qty
      t.string :units
      t.string :name
      t.string :brand
      t.string :description
      t.float :price
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
