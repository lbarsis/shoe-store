Rails.application.routes.draw do
  resources :product_categories
  resources :cart_products
  resources :carts
  resources :order_products
  resources :orders
  resources :products
  resources :categories
  resources :users do 
    resource :cart, only: [:show]
  end

  # get '/users/:id/cart', to: 'users#cart'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
