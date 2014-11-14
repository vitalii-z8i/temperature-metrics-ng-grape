require 'active_record'
require 'mysql2'
require 'logger'

Dir["./app/models/*.rb"].each {|file| require file }

ActiveRecord::Base.logger = Logger.new('debug.log')
configuration = YAML::load(IO.read('config/database.yml'))
ActiveRecord::Base.establish_connection(configuration[ENV['RACK_ENV']])
