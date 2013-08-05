if(!this.$templates){
  $templates={};
};

this.$templates.postsMap = function (__obj) {
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
    
      __out.push('<!--\n\n  Your eco template goes here...\n  \n-->\n\n<div class="posts-map">\n  <div class="header">\n    <a href="#" class="button left">&laquo;</a>\n\n    <h1>\n      Cartography\n    </h1>\n  </div>\n\n  <div class="splitter">\n    <a href="#">Chronological</a> |\n    <a href="#map">Cartographical</a>\n  </div>\n\n  <div id="map" style="height: 480px">\n  </div>\n  \n  <div id="search">\n    <input type="search" />\n  </div>\n</duv>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}