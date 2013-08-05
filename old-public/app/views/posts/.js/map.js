(function() {
  var PostsMapView;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  PostsMapView = (function() {
    function PostsMapView() {
      PostsMapView.__super__.constructor.apply(this, arguments);
    }
    __extends(PostsMapView, Backbone.View);
    PostsMapView.prototype.initialize = function() {
      this.template = $templates.postsMap;
      return this.render();
    };
    PostsMapView.prototype.render = function() {
      $(this.el).html(this.template(this));
      this.delegateEvents();
      return this.addMap();
    };
    PostsMapView.prototype.addMap = function() {
      var markerCluster, options;
      options = {
        center: new google.maps.LatLng(-45, 0),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.$("#map")[0], options);
      this.infowindow = new google.maps.InfoWindow({
        map: this.map
      });
      this.markers = [];
      this.bounds = new google.maps.LatLngBounds;
      this.collection.each(__bind(function(model) {
        var marker;
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(model.get('latitude'), model.get('longitude'))
        });
        google.maps.event.addListener(marker, 'click', __bind(function() {
          this.infowindow.setContent("<a href='#posts/" + model.id + "'>" + (model.get('place').slice(0, 40)) + "</a>");
          return this.infowindow.open(this.map, marker);
        }, this));
        this.markers.push(marker);
        return this.bounds.extend(marker.getPosition());
      }, this));
      markerCluster = new MarkerClusterer(this.map, this.markers);
      return this.map.fitBounds(this.bounds);
    };
    return PostsMapView;
  })();
  this.PostsMapView = PostsMapView;
}).call(this);
