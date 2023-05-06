Rails.application.routes.draw do
  resources :order_products
  resources :orders
  resources :products
  resources :categories
  resources :users

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
