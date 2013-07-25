(function() {
  describe('posts router', function() {
    return describe('explore view', function() {
      it('should handle the truth', function() {
        return expect(true).toBeTruthy();
      });
      it('should exist', function() {
        return expect(PostsExploreView).toBeTruthy();
      });
      it('should instantiate', function() {
        var x;
        x = new PostsExploreView;
        expect(x instanceof PostsExploreView).toBeTruthy();
        return expect(x instanceof Backbone.View).toBeTruthy();
      });
      it('should have render method', function() {
        var x;
        x = new PostsExploreView;
        return x.render();
      });
      return xit('should render some text', function() {
        var x;
        x = new PostsExploreView({
          el: $("<div />")
        });
        x.render();
        return expect(x.$(".myselector").html()).toMatch(/some text/);
      });
    });
  });
}).call(this);
