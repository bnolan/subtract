describe 'blog model', ->

  it 'should handle the truth', ->
    expect(true).toBeTruthy()

  it 'should exist', ->
    expect(Blog).toBeTruthy()

  it 'should instantiate', ->
    x = new Blog
    expect(x instanceof Blog).toBeTruthy()
    expect(x instanceof Backbone.Model).toBeTruthy()

