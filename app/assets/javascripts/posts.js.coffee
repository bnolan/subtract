# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

class PostDialog
  constructor: ->
    @autocomplete = new google.maps.places.Autocomplete($("#post_place")[0])
    google.maps.event.addListener @autocomplete, 'place_changed', @onAutocompletion
    
  onAutocompletion: =>
    place = @autocomplete.getPlace()
    console.log place

    setTimeout( =>
      $("#post_place").val(place.name)
    , 50)

    # set the address
    $(".f-place").addClass('f-place-selected')
    $("#post_address").val(place.formatted_address)
    $("address").text(place.formatted_address)
    
    if place.geometry.viewport
      alert "something..."
    else
      # set the details
      $("#place_latitude").val(place.geometry.location.lat())
      $("#place_longitude").val(place.geometry.location.lng())
    
    # hide the tabs
    $(".tabs").hide()
    
@PostDialog = PostDialog
  
# latlng = new google.maps.LatLng(-41.2929802,174.7788491);
# 
# map = new google.maps.Map($('#map')[0], {
#   center : latlng,
#   zoom : 8
# });
# 
# service = new google.maps.places.PlacesService(map);
# 
# $('#post_place').blur(function(){
#   request = {
#     location : latlng,
#     radius : 20000,
#     keyword : $("#post_place").val()
#   };
#   
#   service.nearbySearch(request, function(results, status){
# 
#     if (status == google.maps.places.PlacesServiceStatus.OK) {
#       var result = results[0];
# 
#       $("#post_latitude").val(result.geometry.location.lat());
#       $("#post_longitude").val(result.geometry.location.lng());
#     }
# 
#     console.log(results);
#     console.log(status);
#   });
# });
