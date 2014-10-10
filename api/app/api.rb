module API
  class Listing < Grape::API
    require 'active_record'
    version 'v1', using: :header, vendor: 'api'
    format :json
    

    resource :sensors do
      get do
        header 'Access-Control-Request-Headers',  'X-Requested-With, accept, content-type'
        header 'Access-Control-Allow-Methods',  'GET, POST'

        header 'Access-Control-Allow-Headers', 'accept, content-type'
        header 'Access-Control-Allow-Origin', 'http://localhost:8000'
        Sensor.by_priority
      end

      params do
        requires :id, type: Integer
        requires :sensor, type: Hash
      end
      route_param :id do
        get do
          Sensor.find(params[:id])
        end

        put do
          Sensor.find(params[:id]).update_attributes(params[:sensor].to_h)
        end

        delete do
          Sensor.find(params[:id]).destroy
        end
      end

      post do
        Sensor.create(params[:sensor].to_h)
      end
    end
  end
end