Rails.application.routes.draw do
  resources :product_categories
  resources :cart_products, only: [:create, :update]
  resources :carts
  resources :order_products
  resources :orders
  resources :products
  resources :categories
  resources :users

  get '/carts/my-cart', to: 'carts#my_cart'
  # post '/cart_products', to: 'cart_products#add_to_cart'

  post '/checkout', to: 'checkouts#checkout'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
