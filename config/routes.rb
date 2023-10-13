Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # get '/css/:file', to: 'assets#css', format: false
  # get '/js/:file', to: 'assets#js', format: false
  # Defines the root path route ("/")
  # root "articles#index"
  root "welcome#index"
end
