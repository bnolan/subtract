(function() {
  var PostsShowView;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  PostsShowView = (function() {
    function PostsShowView() {
      this.onBack = __bind(this.onBack, this);;      PostsShowView.__super__.constructor.apply(this, arguments);
    }
    __extends(PostsShowView, Backbone.View);
    PostsShowView.prototype.initialize = function() {
      this.template = $templates.postsShow;
      return this.render();
    };
    PostsShowView.prototype.events = {
      'click button.left': 'onBack'
    };
    PostsShowView.prototype.render = function() {
      $(this.el).html(this.template(this));
      return this.delegateEvents();
    };
    PostsShowView.prototype.onBack = function() {
      return window.location.hash = "#";
    };
    return PostsShowView;
  })();
  this.PostsShowView = PostsShowView;
}).call(this);
