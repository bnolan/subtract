class Blog < ActiveRecord::Base
  validates_presence_of :user_id, :name
  has_many :posts
  belongs_to :user
  
  def latitude
    posts.select('AVG(latitude) as latitude').group('posts.id').first.latitude
  end
  
  def longitude
    posts.select('AVG(longitude) as longitude').group('posts.id').first.longitude
  end
  
end
