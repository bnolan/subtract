describe 'blog router', ->

  it 'should handle the truth', ->
    expect(true).toBeTruthy()

  it 'should exist', ->
    expect(BlogRouter).toBeTruthy()

  it 'should instantiate', ->
    x = new BlogController
    expect(x instanceof BlogRouter).toBeTruthy()
    expect(x instanceof Backbone.Router).toBeTruthy()

  it 'should have index method', ->
    x = new BlogRouter
    x.index()

    # Umm..?
    expect(true).toBeTruthy()
