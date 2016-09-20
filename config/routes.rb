Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'application#index'

  get 'about' => 'application#about'
  get 'issues' => 'application#issues'
  get 'giving-back' => 'application#giving'
  get 'connect' => 'application#connect'
end
