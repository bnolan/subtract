class Post < ActiveRecord::Base
  attr_accessible :title, :place, :content, :latitude, :longitude
  validates_presence_of :content, :place, :latitude, :longitude
end
