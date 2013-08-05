class BlogsController < ApplicationController
  before_filter :user_required, :only => [:new, :create, :edit, :update]

  def create
    @blog = current_user.blogs.build(blog_params)

    if @blog.save
      redirect_to @blog
    else
      render :action => :create
    end
  end
  
  def show
    @blog = Blog.find(params[:id])
  end
  
  private
  
  def blog_params
    params.require(:blog).permit(:name)
  end
  
end
