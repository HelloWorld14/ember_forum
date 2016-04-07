Rails.application.routes.draw do
  mount_ember_app :ember_forum, to: "/"
end
