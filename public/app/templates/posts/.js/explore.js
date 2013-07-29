if(!this.$templates){
  $templates={};
};

this.$templates.postsExplore = function (__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      var post, _i, _len, _ref;
    
      __out.push('<!--\n\n  Your eco template goes here...\n  \n-->\n\n<div class="header">\n  ');
    
      if (app.getCurrentUser()) {
        __out.push('\n    <a href="/signout" class="button left">Out</a>\n  ');
      } else {
        __out.push('\n    <a href="/auth/twitter" class="button left">In</a>\n  ');
      }
    
      __out.push('\n\n  <h1>\n    Home\n  </h1>\n\n  ');
    
      if (app.getCurrentUser()) {
        __out.push('\n    <a href="#posts/new" class="button right">Post</a>\n  ');
      }
    
      __out.push('\n</div>\n\n<div class="splitter">\n  <a href="#">Chronological</a> |\n  <a href="#map">Cartographical</a>\n</div>\n\n<div class="background">\n  <div class="header-card">\n    <h3>\n      Ben-ns Blog\n    </h3>\n    <p class="meta">\n      <b>META</b> | <b>META</b> | <b>META</b>\n    </p>\n  </div>\n\n  ');
    
      _ref = this.collection.models;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        post = _ref[_i];
        __out.push('\n    <div class="post-card" data-id="');
        __out.push(__sanitize(post.id));
        __out.push('">\n      <h3>');
        __out.push(__sanitize(post.get('place')));
        __out.push('</h3>\n      <img class="map" src="');
        __out.push(__sanitize(this.getMapUrl(post)));
        __out.push('">\n      <div class="content">\n        ');
        __out.push(__sanitize(post.get('content')));
        __out.push('\n      </div>\n      <div class="meta">\n        ');
        __out.push(__sanitize(post.get('created_at')));
        __out.push('\n      </div>\n    </div>\n  ');
      }
    
      __out.push('\n</div>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}