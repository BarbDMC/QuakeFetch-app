Rails.application.routes.draw do
  namespace :api do
    resources :features, only: [:index, :show] do
      post 'comments', to: 'features#create_comment'
    end
  end
end