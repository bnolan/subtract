(function() {
  describe('posts router', function() {
    return describe('new view', function() {
      it('should handle the truth', function() {
        return expect(true).toBeTruthy();
      });
      it('should exist', function() {
        return expect(PostsNewView).toBeTruthy();
      });
      it('should instantiate', function() {
        var x;
        x = new PostsNewView;
        expect(x instanceof PostsNewView).toBeTruthy();
        return expect(x instanceof Backbone.View).toBeTruthy();
      });
      it('should have render method', function() {
        var x;
        x = new PostsNewView;
        return x.render();
      });
      return xit('should render some text', function() {
        var x;
        x = new PostsNewView({
          el: $("<div />")
        });
        x.render();
        return expect(x.$(".myselector").html()).toMatch(/some text/);
      });
    });
  });
}).call(this);
