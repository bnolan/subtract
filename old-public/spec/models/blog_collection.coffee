describe 'blog collection', ->

  it 'should handle the truth', ->
    expect(true).toBeTruthy()

  it 'should exist', ->
    expect(BlogCollection).toBeTruthy()

  it 'should instantiate', ->
    x = new BlogCollection
    expect(x instanceof BlogCollection).toBeTruthy()
    expect(x instanceof Backbone.Collection).toBeTruthy()
    expect(x.model == Blog).toBeTruthy()

