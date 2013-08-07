class PostsController < ApplicationController
  before_filter :user_required, :only => [:new, :create, :edit, :update, :destroy]
  
  def index
    @posts = Post.order('created_at desc').all
  end
  
  def show
    @post = Post.find(params[:id])

    @blog = if params[:blog_id]
      Blog.find(params[:blog_id])
    else
      @post.blog
    end
  end
    
  def create
    post = current_user.posts.build(post_params)
    
    if params[:post][:blog_id].match /Create/
      blog = current_user.blogs.build(blog_params)

      if blog.save
        post.blog_id = blog.id
      else
        raise Exception, "Boohoo"
      end
    end

    if post.save
      redirect_to post
    else
      raise Exception, "Boohoo"
    end
  end

  def edit
    @post = current_user.posts.find(params[:id])
  end
  
  def update
    post = current_user.posts.find(params[:id])
    post.attributes = post_params
    
    if params[:post][:blog_id].match /Create/
      blog = current_user.blogs.build(blog_params)

      if blog.save
        post.blog_id = blog.id
      else
        raise Exception, "Boohoo"
      end
    end
    
    if post.save
      flash[:message] = "Changes to your post were saved"
      redirect_to post
    else
      raise Exception, "Boohoohoo"
    end
  end
  
  def destroy
    post = Post.find(params[:id])
    post.destroy
    render :json => { :success => true }
  end

  private
  
  def post_params
    params.require(:post).permit(:place, :content, :address, :latitude, :longitude, :blog_id)
  end
  
  def blog_params
    params.require(:blog).permit(:name)
  end
  
end