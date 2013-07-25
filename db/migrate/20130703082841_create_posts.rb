class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :place, :title, :address
      t.text :content
      t.float :latitude, :longitude
      t.timestamps
    end
  end
end
