(function() {
  var PostsRouter;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  PostsRouter = (function() {
    function PostsRouter() {
      PostsRouter.__super__.constructor.apply(this, arguments);
    }
    __extends(PostsRouter, Backbone.Router);
    PostsRouter.prototype.routes = {
      "posts/:id/edit": "edit",
      "posts/new": "create",
      "posts/:id": "show",
      "": "explore"
    };
    PostsRouter.prototype.show = function(id) {
      return new PostsShowView({
        el: $('body'),
        model: app.getPost(id)
      });
    };
    PostsRouter.prototype.create = function(id) {
      return new PostsNewView({
        el: $('body'),
        model: new Post
      });
    };
    PostsRouter.prototype.explore = function() {
      return new PostsExploreView({
        el: $('body'),
        collection: app.getPublicPosts()
      });
    };
    return PostsRouter;
  })();
  this.PostsRouter = PostsRouter;
}).call(this);
