class Application
  constructor: ->
    
  start: ->
    console.log 'App started'

    # Create your controllers here...
    new PostsRouter

    @publicPosts = new PostCollection
    @publicPosts.url = "/posts"
    @publicPosts.fetch {
      success : @fetchUser
    }
    
  fetchUser: =>
    $.getJSON '/status', (response) =>
      @currentUser = response
      @onStart()

  getCurrentUser: ->
    @currentUser
    
  onStart: =>
    # Then start backbone
    Backbone.history.start()

  getPost: (id) ->
    @getPublicPosts().get(id)
    
  getPublicPosts: ->
    @publicPosts
    
    # new PostCollection [
    #   { 
    #     id : 1
    #     content : "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, `and what is the use of a book,' thought Alice `without pictures or conversation?'"
    #     place : "Wonderland"
    #     created_at : "2013-07-22 19:00:49"
    #     user : { name : "captainbenis" }
    #   },
    #   { 
    #     id : 2
    #     content : "So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her."
    #     place : "Looking glass"
    #     created_at : "2013-07-22 19:00:49"
    #     user : { name : "alice" }
    #   },
    #   { 
    #     id : 3
    #     content : "There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, `Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge."
    #     place : "Rabbit hole"
    #     created_at : "2013-07-22 19:00:49"
    #     user : { name : "captainbenis" }
    #   },
    #   { 
    #     id : 4
    #     content : "In another moment down went Alice after it, never once considering how in the world she was to get out again."
    #     place : "Under the Tree"
    #     created_at : "2013-07-22 19:00:49"
    #     user : { name : "alice" }
    #   },
    #   { 
    #     id : 5
    #     content : "The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well."
    #     place : "The Kingdom"
    #     created_at : "2013-07-22 19:00:49"
    #     user : { name : "madhatter" }
    #   }
    # ]

@Application = Application
