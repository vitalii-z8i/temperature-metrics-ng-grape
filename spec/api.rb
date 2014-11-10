require 'spec_helper'

describe API::Listing do
  describe 'GET /api/sensors' do
    it 'returns empty list' do
      get '/api/sensors'
      response.status.should == 200
      JSON.parse(response.body).should == []
    end

    it 'return sensors list' do
      3.times { create(:sensor) }
      get '/api/sensors'
      response.status.should == 200
      JSON.parse(response.body).should == Sensor.all.to_json
    end
  end
end