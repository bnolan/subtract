(function() {
  describe('posts router', function() {
    return describe('map view', function() {
      it('should handle the truth', function() {
        return expect(true).toBeTruthy();
      });
      it('should exist', function() {
        return expect(PostsMapView).toBeTruthy();
      });
      it('should instantiate', function() {
        var x;
        x = new PostsMapView;
        expect(x instanceof PostsMapView).toBeTruthy();
        return expect(x instanceof Backbone.View).toBeTruthy();
      });
      it('should have render method', function() {
        var x;
        x = new PostsMapView;
        return x.render();
      });
      return xit('should render some text', function() {
        var x;
        x = new PostsMapView({
          el: $("<div />")
        });
        x.render();
        return expect(x.$(".myselector").html()).toMatch(/some text/);
      });
    });
  });
}).call(this);
