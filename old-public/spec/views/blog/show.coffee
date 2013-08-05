describe 'blog router', ->

  describe 'show view', ->

    it 'should handle the truth', ->
      expect(true).toBeTruthy()

    it 'should exist', ->
      expect(BlogShowView).toBeTruthy()

    it 'should instantiate', ->
      x = new BlogShowView
      expect(x instanceof BlogShowView).toBeTruthy()
      expect(x instanceof Backbone.View).toBeTruthy()

    it 'should have render method', ->
      x = new BlogShowView
      x.render()

    # Implement as you see fit
    xit 'should render some text', ->
      x = new BlogShowView { el : $("<div />") }
      x.render()
      expect(x.$(".myselector").html()).toMatch /some text/
