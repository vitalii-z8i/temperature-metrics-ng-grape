require 'rubygems'

ENV['RACK_ENV'] ||= 'test'
require 'rack/test'
require File.expand_path('../../boot/boot', __FILE__)

require 'factory_girl'
# Dir["support/**/*.rb"].each {|f| require f}
require File.expand_path('../support/factories', __FILE__)
require 'database_cleaner'

RSpec.configure do |config|
  config.mock_with :rspec
  config.expect_with :rspec
  config.raise_errors_for_deprecations!
  config.include FactoryGirl::Syntax::Methods

  config.before(:suite) do
    FactoryGirl.lint
  end

  config.before(:each) do
    Sensor.delete_all
  end
end