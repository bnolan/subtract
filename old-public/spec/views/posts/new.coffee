describe 'posts router', ->

  describe 'new view', ->

    it 'should handle the truth', ->
      expect(true).toBeTruthy()

    it 'should exist', ->
      expect(PostsNewView).toBeTruthy()

    it 'should instantiate', ->
      x = new PostsNewView
      expect(x instanceof PostsNewView).toBeTruthy()
      expect(x instanceof Backbone.View).toBeTruthy()

    it 'should have render method', ->
      x = new PostsNewView
      x.render()

    # Implement as you see fit
    xit 'should render some text', ->
      x = new PostsNewView { el : $("<div />") }
      x.render()
      expect(x.$(".myselector").html()).toMatch /some text/
