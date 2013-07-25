class PostsRouter extends Backbone.Router
  routes :
    "posts/:id/edit" : "edit"
    "posts/new" : "create"
    "posts/:id" : "show"
    "" : "explore"

  show: (id) ->
    new PostsShowView { 
      el : $('body') 
      model : app.getPost(id)
    }
    
  create: (id) ->
    new PostsNewView { 
      el : $('body') 
      model : new Post
    }

  explore: ->
    new PostsExploreView { 
      el : $('body') 
      collection : app.getPublicPosts()
    }

@PostsRouter = PostsRouter
