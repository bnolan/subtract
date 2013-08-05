class PostsController < ApplicationController
  before_filter :user_required, :only => [:new, :create, :edit, :update, :destroy]
  
  def index
    @posts = Post.order('created_at desc').all
  end
  
  def show
    @post = Post.find(params[:id])
  end
    
  def create
    redirect_to Post.create!(params[:post])
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