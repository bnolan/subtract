class BlogRouter extends Backbone.Router
  routes :
    "blog/:id/edit" : "edit"
    "blog/new" : "new"
    "blog/:id" : "show"
    "blog" : "index"

  index: ->
    # new BlogIndexView

@BlogRouter = BlogRouter
