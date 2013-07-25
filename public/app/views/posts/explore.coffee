class PostsExploreView extends Backbone.View
  initialize: ->
    @template = $templates.postsExplore
    @render()
    
  events: {
    'click .post-card' : 'onClickPost'
  }
  
  render: ->
    $(@el).html(@template(this))
    @delegateEvents()
    
  onClickPost: (e) =>
    window.location.hash = "posts/" + $(e.currentTarget).attr('data-id')

  # helpers
  
  getMapUrl: (post) ->
    "http://api.tiles.mapbox.com/v3/examples.map-vyofok3q/pin-m-star+ff6633(#{post.get('longitude')},#{post.get('latitude')})/#{post.get('longitude')},#{post.get('latitude')},15/300x100.png"
    
@PostsExploreView = PostsExploreView
