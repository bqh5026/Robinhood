Rails.application.routes.draw do
  # get 'dashboard/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

# root to: 'dashboard#index'
namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :new, :index, :show]
    resource :session, only: [:new, :create, :destroy]
end

  root "static_pages#root"
end
