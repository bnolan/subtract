class PostsShowView extends Backbone.View
  initialize: ->
    @template = $templates.postsShow
    @render()

  events: {
    'click button.left' : 'onBack'
  }
  
  render: ->
    $(@el).html(@template(this))
    @delegateEvents()

  onBack: =>
    window.location.hash = "#"
    
@PostsShowView = PostsShowView
