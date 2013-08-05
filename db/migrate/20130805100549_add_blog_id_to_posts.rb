class AddBlogIdToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :blog_id, :integer
    add_column :posts, :position, :integer
  end
end
