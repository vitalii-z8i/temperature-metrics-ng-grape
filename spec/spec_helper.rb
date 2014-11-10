# require '/spec/support/factory_girl.rb'
Dir["support/**/*.rb"].each {|f| require f}

RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods

  config.include RSpec::RequestExampleGroup, :type => :request, :example_group => { 
    :file_path => /spec\/api.rb/
  }

  config.before(:suite) do
    begin
      DatabaseCleaner.start
      FactoryGirl.lint
    ensure
      DatabaseCleaner.clean
    end
  end
end