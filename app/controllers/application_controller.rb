class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
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
