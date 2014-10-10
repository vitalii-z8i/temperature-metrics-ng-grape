class Schema < ActiveRecord::Migration
  def change
    create_table :sensors, force: true do |t|
      t.string :name
      t.boolean :featured
    end
  end
end