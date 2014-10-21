module API
  class Listing < Grape::API
    require 'active_record'
    version 'v1', using: :header, vendor: 'api'
    format :json
    

    resource :sensors do
      before do
        header 'Access-Control-Allow-Headers', 'accept, content-type'
        header 'Access-Control-Allow-Origin', 'http://localhost:8000'
      end

      get do
        Sensor.by_priority
      end

      params do
        requires :sensor, type: Hash
      end
      post do
        Sensor.create(params[:sensor].to_h)
      end

      desc 'Resource actions'
      route_param :id do
        get do
          Sensor.where(id: params[:id]).first
        end

        params do
          requires :sensor, type: Hash
        end

        put do
          header 'Access-Control-Allow-Headers', 'accept, content-type'
          Sensor.find(params[:id]).assign_attributes(params[:sensor].to_h).save
        end

        delete do
          header 'Access-Control-Allow-Origin', 'http://localhost:8000'
          Sensor.find(params[:id]).destroy
        end
      end
    end
  end
end