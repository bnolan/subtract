(function() {
  var PostsExploreView;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  PostsExploreView = (function() {
    function PostsExploreView() {
      this.onClickPost = __bind(this.onClickPost, this);;      PostsExploreView.__super__.constructor.apply(this, arguments);
    }
    __extends(PostsExploreView, Backbone.View);
    PostsExploreView.prototype.initialize = function() {
      this.template = $templates.postsExplore;
      return this.render();
    };
    PostsExploreView.prototype.events = {
      'click .post-card': 'onClickPost'
    };
    PostsExploreView.prototype.render = function() {
      $(this.el).html(this.template(this));
      return this.delegateEvents();
    };
    PostsExploreView.prototype.onClickPost = function(e) {
      return window.location.hash = "posts/" + $(e.currentTarget).attr('data-id');
    };
    PostsExploreView.prototype.getMapUrl = function(post) {
      return "http://api.tiles.mapbox.com/v3/examples.map-vyofok3q/pin-m-star+ff6633(" + (post.get('longitude')) + "," + (post.get('latitude')) + ")/" + (post.get('longitude')) + "," + (post.get('latitude')) + ",15/300x100.png";
    };
    return PostsExploreView;
  })();
  this.PostsExploreView = PostsExploreView;
}).call(this);
