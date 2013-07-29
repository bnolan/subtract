class PostsController < ApplicationController
  
  def index
    @posts = Post.order('created_at desc').all
    render :json => @posts
  end
  
  def show
    render :json => Post.find(params[:id])
  end
    
  def create
    render :json => Post.create!(params[:post])
  end
  
  def update
    post = Post.find(params[:id])
    post.update_attributes! params[:post]
    render :json => { :success => true }
  end
  
  def destroy
    post = Post.find(params[:id])
    post.destroy
    render :json => { :success => true }
  end

end