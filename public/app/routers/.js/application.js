(function() {
  var Application;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Application = (function() {
    function Application() {
      this.onStart = __bind(this.onStart, this);;
    }
    Application.prototype.start = function() {
      console.log('App started');
      new PostsRouter;
      this.publicPosts = new PostCollection;
      this.publicPosts.url = "/posts";
      return this.publicPosts.fetch({
        success: this.onStart
      });
    };
    Application.prototype.onStart = function() {
      return Backbone.history.start();
    };
    Application.prototype.getPost = function(id) {
      return this.getPublicPosts().get(id);
    };
    Application.prototype.getPublicPosts = function() {
      return this.publicPosts;
    };
    return Application;
  })();
  this.Application = Application;
}).call(this);
