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
      'click button.left': 'onBack',
      'click button.destroy': 'onDestroy'
    };
    PostsShowView.prototype.render = function() {
      $(this.el).html(this.template(this));
      return this.delegateEvents();
    };
    PostsShowView.prototype.onBack = function() {
      return window.location.hash = "#";
    };
    PostsShowView.prototype.onDestroy = function() {
      if (confirm('Are you sure you want to delete this post?')) {
        return this.model.destroy({
          success: __bind(function() {
            return alert("Beepity boop!");
          }, this)
        });
      }
    };
    PostsShowView.prototype.getTwitterUrl = function() {
      var components, k, params, v;
      params = {
        original_referer: window.location.toString(),
        text: this.model.get('content').slice(0, 50) + "... " + window.location.toString(),
        tw_p: "tweetbutton",
        via: "subtractin"
      };
      components = (function() {
        var _results;
        _results = [];
        for (k in params) {
          v = params[k];
          _results.push([k, encodeURIComponent(v)].join("="));
        }
        return _results;
      })();
      return "https://twitter.com/intent/tweet?" + components.join("&");
    };
    PostsShowView.prototype.getMapUrl = function() {
      return "https://www.google.com/maps/preview?q=" + (this.model.get('latitude')) + "," + (this.model.get('longitude'));
    };
    return PostsShowView;
  })();
  this.PostsShowView = PostsShowView;
}).call(this);
