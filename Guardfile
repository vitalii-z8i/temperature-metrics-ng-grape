# A sample Guardfile
# More info at https://github.com/guard/guard#readme
  watch('app/api.rb') { `rspec` }
  watch('spec/spec_helper.rb') { `rspec` }

  watch(%r{frontend\/app\/(.+)(\/)?.*}) do
    `$(bash test_angular.sh)`
  end