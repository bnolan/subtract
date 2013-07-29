if(!this.$templates){
  $templates={};
};

this.$templates.postsNew = function (__obj) {
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
    
      __out.push('<!--\n\n  Your eco template goes here...\n  \n-->\n\n<div class="posts-new">\n  <div class="header">\n    <a href="#" class="button left">&laquo;</a>\n\n    <h1>\n      New Post\n    </h1>\n\n    <button type="submit" class="post right">\n      ');
    
      __out.push(__sanitize(this.model.isNew() ? "Post" : "Save"));
    
      __out.push('\n    </button>\n  </div>\n\n  <div class="f f-location">\n    <!--label>Name of the place you are writing about</label-->\n    <input placeholder="Location" type="text" name="place" value="');
    
      __out.push(__sanitize(this.model.get('place')));
    
      __out.push('" autocapitalize="off" autocorrect="off" />\n    <!--button>...</button-->\n    <address></address>\n    <input type="hidden" name="latitude">\n    <input type="hidden" name="longitude">\n    \n    <div id="map" style="display: none">\n      <small>Drag and zoom the map to center on the place you are describing</small>\n      <div id="map-container"></div>\n      <button class="submit confirm">Ok</button>\n    </div>\n  </div>\n  \n  <div class="f f-content">\n    <!--label>Write your post here...</label-->\n    <textarea placeholder="Content..." name="content">');
    
      __out.push(__sanitize(this.model.get('content')));
    
      __out.push('</textarea>\n  </div>\n</div>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}