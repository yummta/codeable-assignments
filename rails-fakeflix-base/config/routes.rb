Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :movies, only: :
  end
end

# GET /api/movies?filter=value

# GET /api/series?filter=value
# GET /api/movies/:id
# GET /api/series/:id
# GET /api/episodes/:id
# POST /api/rents/movie/:id
# POST /api/rents/serie/:id
# GET /api/rents
# PATCH /api/movies/:id/playback
# PATCH /api/episode/:id/playback
# PATCH /api/movie/:id/rating
# PATCH /api/serie/:id/rating



# Rails.application.routes.draw do
#   namespace :api do
#     resources :movies, except: [:destroy] do
#       patch 'playback', on: :member
#     end
#     resources :series, except: [:destroy] do
#       patch 'playback', on: :member
#     end
#     resources :episodes, only: :show
#     resources :rents, controller: 'rentals', only: :index
#     post '/rents/movie/:id', to: 'rentals#create'
#     post '/rents/serie/:id', to: 'rentals#create'
#   end
# end