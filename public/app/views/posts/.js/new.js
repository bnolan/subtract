(function() {
  var PostsNewView;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  PostsNewView = (function() {
    function PostsNewView() {
      this.onSetMapLocation = __bind(this.onSetMapLocation, this);;
      this.onSubmit = __bind(this.onSubmit, this);;      PostsNewView.__super__.constructor.apply(this, arguments);
    }
    __extends(PostsNewView, Backbone.View);
    PostsNewView.prototype.initialize = function() {
      this.template = $templates.postsNew;
      return this.render();
    };
    PostsNewView.prototype.events = {
      'click button.confirm': 'onSetMapLocation',
      "click button[type='submit']": 'onSubmit',
      'keydown textarea': 'onText'
    };
    PostsNewView.prototype.render = function() {
      $(this.el).html(this.template(this));
      this.delegateEvents();
      return this.addAutocomplete();
    };
    PostsNewView.prototype.onSubmit = function(e) {
      var el, _i, _len, _ref;
      e.preventDefault();
      _ref = this.$("[name]");
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        el = _ref[_i];
        this.model.set($(el).attr('name'), $(el).val());
      }
      this.model.save();
      return window.location.hash = "#";
    };
    PostsNewView.prototype.onText = function() {
      return this.$(".f.disabled").removeClass('disabled');
    };
    PostsNewView.prototype.addAutocomplete = function() {
      var autocomplete, input, options;
      options = {
        center: new google.maps.LatLng(45, 0),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.$("#map-container")[0], options);
      input = $(this.el).find("input[name='place']");
      autocomplete = new google.maps.places.Autocomplete(input[0]);
      return google.maps.event.addListener(autocomplete, 'place_changed', __bind(function() {
        var place;
        place = autocomplete.getPlace();
        console.log(place);
        this.$("address").text(place.formatted_address);
        if (place.geometry.viewport) {
          this.$("#map").show();
          google.maps.event.trigger(this.map, 'resize');
          return this.map.fitBounds(place.geometry.viewport);
        } else {
          this.$("[name='latitude']").val(place.geometry.location.lat());
          this.$("[name='longitude']").val(place.geometry.location.lng());
          setTimeout(__bind(function() {
            return input.val(place.name);
          }, this), 250);
          return this.$(".f-content").removeClass('disabled').find('textarea').focus();
        }
      }, this));
    };
    PostsNewView.prototype.onSetMapLocation = function() {
      this.$("#map").hide();
      this.$(".f-content").removeClass('disabled').find('textarea').focus();
      this.$("[name='latitude']").val(this.map.getCenter().lat());
      return this.$("[name='longitude']").val(this.map.getCenter().lng());
    };
    return PostsNewView;
  })();
  this.PostsNewView = PostsNewView;
}).call(this);
