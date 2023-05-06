class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :fname
      t.string :lname
      t.string :email
      t.string :password_digest
      t.boolean :is_admin
      t.string :shipping_address
      t.string :billing_address

      t.timestamps
    end
  end
end
