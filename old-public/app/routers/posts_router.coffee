class PostsRouter extends Backbone.Router
  routes :
    "posts/:id/edit" : "edit"
    "posts/new" : "create"
    "posts/:id" : "show"
    "" : "explore"
    "map" : "map"

  show: (id) ->
    new PostsShowView { 
      el : $('body') 
      model : app.getPost(id)
    }
    
  create: ->
    new PostsNewView { 
      el : $('body') 
      model : new Post
    }
    
  edit: (id) ->
    new PostsNewView { 
      el : $('body') 
      model : app.getPost(id)
    }

  explore: ->
    new PostsExploreView { 
      el : $('body') 
      collection : app.getPublicPosts()
    }

  map: ->
    new PostsMapView { 
      el : $('body') 
      collection : app.getPublicPosts()
    }

@PostsRouter = PostsRouter
