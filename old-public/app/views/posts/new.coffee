class PostsNewView extends Backbone.View
  initialize: ->
    @template = $templates.postsNew
    @render()
    
  events: {
    'click button.confirm' : 'onSetMapLocation'
    "click button[type='submit']" : 'onSubmit'
    'keydown textarea' : 'onText'
  }

  render: ->
    $(@el).html(@template(this))
    @delegateEvents()
    @addAutocomplete()
    
  onSubmit: (e) =>
    e.preventDefault()
    
    for el in @$("[name]")
      @model.set $(el).attr('name'), $(el).val()
      
    # console.log @model.attributes
    
    @model.save()
    
    window.location.hash = "#"
    
  onText: ->
    @$(".f.disabled").removeClass('disabled')
    
  addAutocomplete: ->
    options = {
      center : new google.maps.LatLng(45, 0)
      zoom : 13
      mapTypeId : google.maps.MapTypeId.ROADMAP
    }
    
    @map = new google.maps.Map(@$("#map-container")[0], options)

    input = $(@el).find("input[name='place']")
    autocomplete = new google.maps.places.Autocomplete(input[0])
    
    google.maps.event.addListener autocomplete, 'place_changed', =>
      place = autocomplete.getPlace()
      console.log place
      
      @$("address").text(place.formatted_address) # vicinity

      if place.geometry.viewport
        # this is a region, need to display a map to pinpoint the place
        @$("#map").show()
        google.maps.event.trigger(@map, 'resize')
        @map.fitBounds place.geometry.viewport
      else
        @$("[name='latitude']").val(place.geometry.location.lat())
        @$("[name='longitude']").val(place.geometry.location.lng())

        setTimeout( =>
          input.val(place.name)
        , 250)

        @$(".f-content").removeClass('disabled').find('textarea').focus()
    
  onSetMapLocation: =>
    @$("#map").hide()
    @$(".f-content").removeClass('disabled').find('textarea').focus()

    @$("[name='latitude']").val(@map.getCenter().lat())
    @$("[name='longitude']").val(@map.getCenter().lng())
    

@PostsNewView = PostsNewView
