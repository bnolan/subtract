describe 'posts router', ->

  describe 'map view', ->

    it 'should handle the truth', ->
      expect(true).toBeTruthy()

    it 'should exist', ->
      expect(PostsMapView).toBeTruthy()

    it 'should instantiate', ->
      x = new PostsMapView
      expect(x instanceof PostsMapView).toBeTruthy()
      expect(x instanceof Backbone.View).toBeTruthy()

    it 'should have render method', ->
      x = new PostsMapView
      x.render()

    # Implement as you see fit
    xit 'should render some text', ->
      x = new PostsMapView { el : $("<div />") }
      x.render()
      expect(x.$(".myselector").html()).toMatch /some text/
