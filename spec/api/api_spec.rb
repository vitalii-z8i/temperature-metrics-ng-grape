require 'spec_helper'

describe API::Listing do
  include Rack::Test::Methods

  def app
    API::Listing
  end

  before(:each) do
    allow_any_instance_of(Sensor).to receive(:temp).and_return(43)
  end

  describe 'GET /sensors' do
    it 'returns empty list' do
      response = get '/sensors'
      expect(response.status).to eq(200)
      expect(JSON.parse(response.body)).to eq([])
    end

    it 'returns sensors list' do
      3.times { create(:sensor) }
      response = get '/sensors'
      expect(response.status).to eq(200)
      expect(response.body).to eq(Sensor.all.to_json)
    end
  end

  describe 'POST /sensors/:id' do
    it 'creates new sensor' do
      sensor_params = {name: 'New Sensor', featured: false}
      response = post "/sensors", {sensor: sensor_params}
      expect(response.status).to eq(201)
      expect(Sensor.count).to eq(1)
      sensor = Sensor.first
      expect(sensor.name).to eq(sensor_params[:name])
      expect(sensor.featured).to eq(sensor_params[:featured])
    end
  end

  describe 'GET /sensors/:id' do
    it 'returns selected sensor' do
      sensor = create(:sensor)
      response = get "/sensors/#{sensor.id}"
      expect(response.status).to eq(200)
      expect(response.body).to eq(sensor.to_json)
    end
  end

  describe 'PUT /sensors/:id' do
    it 'updates selected sensor' do
      sensor = create(:sensor)
      sensor_params = {name: 'New_name', featured: false}
      response = put "/sensors/#{sensor.id}", {sensor: sensor_params}
      expect(response.status).to eq(200)
      expect(response.body).to eq(sensor.reload.to_json)
      expect(sensor.name).to eq(sensor_params[:name])
      expect(sensor.featured).to eq(sensor_params[:featured])
    end
  end

  describe 'DELETE /sensors/:id' do
    it 'returns selected sensor' do
      sensor = create(:sensor)
      response = delete "/sensors/#{sensor.id}"
      expect(response.status).to eq(200)
      expect(Sensor.count).to eq(0)
    end
  end
end