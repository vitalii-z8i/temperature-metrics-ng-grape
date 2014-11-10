class Sensor < ActiveRecord::Base
  scope :by_priority, -> { order(featured: :desc) }

  def temp
    rand(-50..70)
  end

  def attributes
    super.merge(temp: self.temp)
  end
end