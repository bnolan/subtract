if(!this.$templates){
  $templates={};
};

this.$templates.postsShow = function (__obj) {
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
    
      __out.push('<!--\n\n  Your eco template goes here...\n  \n-->\n\n<div class="posts-show">\n  <div class="header">\n    <button class="left">&laquo;</button>\n\n    <h1>\n      Show post\n    </h1>\n\n    <a href="#posts/');
    
      __out.push(__sanitize(this.model.id));
    
      __out.push('/edit" class="button right">Edit</a>\n  </div>\n\n  <div class="post-header">\n    <div class="info">\n      <img src="images/avatar.png" class="avatar" />\n      <div>\n        <h3>');
    
      __out.push(__sanitize(this.model.get('place')));
    
      __out.push('</h3>\n        <div class="meta">\n          Posted on ');
    
      __out.push(__sanitize(this.model.get('created_at')));
    
      __out.push('\n          <!-- | xx Views | xx Likes -->\n        </div>\n      </div>\n    </div>\n  \n    <img class="map" src="http://api.tiles.mapbox.com/v3/examples.map-vyofok3q/pin-m-star+ff6633(-77,38.9)/-77,38.9,15/320x240.png">\n  </div>\n\n  <div class="actions">\n    <button>Share</button>\n    <button>Like</button>\n    <!-- replace with some kind of little rubbish bin icon -->\n    <button class="destroy">Destroy post</button>\n  </div>\n\n  <div class="content">\n    ');
    
      __out.push(__sanitize(this.model.get('content')));
    
      __out.push('\n  </div>\n</div>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}