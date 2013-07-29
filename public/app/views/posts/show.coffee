class PostsShowView extends Backbone.View
  initialize: ->
    @template = $templates.postsShow
    @render()

  events: {
    'click button.left' : 'onBack'
    'click button.destroy' : 'onDestroy'
  }
  
  render: ->
    $(@el).html(@template(this))
    @delegateEvents()

  onBack: =>
    window.location.hash = "#"
    
  onDestroy: ->
    if confirm('Are you sure you want to delete this post?')
      @model.destroy {
        success : =>
          alert("Beepity boop!")
      }

  # helper methods used by the view
  
  getTwitterUrl: ->
    params = {
      original_referer : window.location.toString()
      text : @model.get('content').slice(0,50) + "... " + window.location.toString()
      tw_p : "tweetbutton"
      via : "subtractin"
    }

    components = for k,v of params
      [k,encodeURIComponent(v)].join("=")

    "https://twitter.com/intent/tweet?" + components.join("&")

  getMapUrl: ->
    "https://www.google.com/maps/preview?q=#{@model.get('latitude')},#{@model.get('longitude')}"
    
@PostsShowView = PostsShowView
