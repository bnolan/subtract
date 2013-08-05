describe 'posts router', ->

  describe 'explore view', ->

    it 'should handle the truth', ->
      expect(true).toBeTruthy()

    it 'should exist', ->
      expect(PostsExploreView).toBeTruthy()

    it 'should instantiate', ->
      x = new PostsExploreView
      expect(x instanceof PostsExploreView).toBeTruthy()
      expect(x instanceof Backbone.View).toBeTruthy()

    it 'should have render method', ->
      x = new PostsExploreView
      x.render()

    # Implement as you see fit
    xit 'should render some text', ->
      x = new PostsExploreView { el : $("<div />") }
      x.render()
      expect(x.$(".myselector").html()).toMatch /some text/
