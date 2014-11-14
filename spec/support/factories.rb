require 'faker'
FactoryGirl.define do
  factory :sensor do
    name     Faker::Address.city
    featured [true, false].sample
  end
end