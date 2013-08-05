(function() {
  describe('posts router', function() {
    return describe('show view', function() {
      it('should handle the truth', function() {
        return expect(true).toBeTruthy();
      });
      it('should exist', function() {
        return expect(PostsShowView).toBeTruthy();
      });
      it('should instantiate', function() {
        var x;
        x = new PostsShowView;
        expect(x instanceof PostsShowView).toBeTruthy();
        return expect(x instanceof Backbone.View).toBeTruthy();
      });
      it('should have render method', function() {
        var x;
        x = new PostsShowView;
        return x.render();
      });
      return xit('should render some text', function() {
        var x;
        x = new PostsShowView({
          el: $("<div />")
        });
        x.render();
        return expect(x.$(".myselector").html()).toMatch(/some text/);
      });
    });
  });
}).call(this);
