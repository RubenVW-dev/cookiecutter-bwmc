{{cookiecutter.project_name}}.FreeWall = (function(){

    var wall, child;

    function FreeWall(el, child) {
        _.bindAll(this, 'init', 'onResize'); 

        this.wall = new freewall(el);
        this.child = child;
        this.init();
    };

    FreeWall.prototype.init = function() {
        var child = this.child;
        var wall = this.wall;

        wall.reset({
            selector: child,
            cellW: 'auto',
            cellH: 'auto',
            gutterX: 'auto',
            gutterY: 0,
            onResize: this.onResize
        });

        var images = wall.container.find(child);
        window.freewallInterval = setInterval(this.onResize, 500);
        images.find('img').load(this.onResize);
    };

    FreeWall.prototype.onResize = function(){
        clearInterval(window.freewallInterval);
        var wall = this.wall;
        wall.fitWidth();
        wall.fillHoles();
    };

    return FreeWall;

})();