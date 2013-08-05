describe 'posts router', ->

  describe 'show view', ->

    it 'should handle the truth', ->
      expect(true).toBeTruthy()

    it 'should exist', ->
      expect(PostsShowView).toBeTruthy()

    it 'should instantiate', ->
      x = new PostsShowView
      expect(x instanceof PostsShowView).toBeTruthy()
      expect(x instanceof Backbone.View).toBeTruthy()

    it 'should have render method', ->
      x = new PostsShowView
      x.render()

    # Implement as you see fit
    xit 'should render some text', ->
      x = new PostsShowView { el : $("<div />") }
      x.render()
      expect(x.$(".myselector").html()).toMatch /some text/
