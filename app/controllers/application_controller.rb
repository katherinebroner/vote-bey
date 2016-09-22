class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @tweets = $client.user_timeline("beyonce").first(6)

    # @user = $client.user("katherinebroner")
  end

  def about
  end

  def issues
  end

  def giving
  end

  def connect
  end
end
