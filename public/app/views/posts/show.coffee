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
    
@PostsShowView = PostsShowView
