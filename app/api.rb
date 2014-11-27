module API
  class Listing < Grape::API
    require 'active_record'
    version 'v1', using: :header, vendor: 'api'
    format :json

    resource :sensors do

      desc 'Collection actions'
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
          sensor = Sensor.find(params[:id])
          sensor.assign_attributes(params[:sensor].to_h)
          sensor.save!
          sensor
        end

        delete do
          Sensor.find(params[:id]).destroy
        end
      end
    end
  end
end