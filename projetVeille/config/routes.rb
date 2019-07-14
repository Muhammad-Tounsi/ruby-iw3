Rails.application.routes.draw do
  resources :articles
  resources :comments
  resources :categories
end
