class User < ApplicationRecord
  has_secure_password
  has_many :orders, dependent: :destroy
  has_many :products, through: :orders

  has_one :cart, dependent: :destroy
  has_many :cart_products, through: :cart

  validates :fname, :lname, :email, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :is_admin, inclusion: { in: [true, false] }
end
