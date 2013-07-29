class PostsMapView extends Backbone.View
  initialize: ->
    @template = $templates.postsMap
    @render()
    
  render: ->
    $(@el).html(@template(this))
    @delegateEvents()
    @addMap()
    
  addMap: ->
    options = {
      center : new google.maps.LatLng(-45, 0)
      zoom : 15
      mapTypeId : google.maps.MapTypeId.ROADMAP
    }
    
    @map = new google.maps.Map(@$("#map")[0], options)
    @infowindow = new google.maps.InfoWindow { map : @map }
    
    @markers = []
    @bounds = new google.maps.LatLngBounds
    
    @collection.each (model) =>
      marker = new google.maps.Marker {
        position : new google.maps.LatLng(model.get('latitude'), model.get('longitude'))
      }
      google.maps.event.addListener marker, 'click', =>
        @infowindow.setContent "<a href='#posts/#{model.id}'>#{model.get('place').slice(0,40)}</a>"
        @infowindow.open @map, marker
      @markers.push(marker)
      @bounds.extend marker.getPosition()

    markerCluster = new MarkerClusterer(@map, @markers)

        # 
        # new google.maps.InfoWindow {
        #   map : @map
        #   content : model.get('place')
        #   position : marker.getPosition()
        # }
        
        #   map.setZoom(8);
        #   map.setCenter(marker.getPosition());
    
    @map.fitBounds(@bounds)
    
@PostsMapView = PostsMapView
