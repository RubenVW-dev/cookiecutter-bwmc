{{cookiecutter.project_name}}.FlexSlider = (function(){

    var $el, controlNav, directionNav, animation, autoSlide, pauseOnHover;

    function FlexSlider(el, controlNav, directionNav, animation, autoSlide, pauseOnHover) {
        _.bindAll(this, 'init'); 

        selector = el || '.flexslider';

        this.$el = $(selector);
        this.controlNav = (typeof controlNav === "undefined" || controlNav === null) ? true : controlNav;
        this.directionNav = (typeof directionNav === "undefined" || directionNav === null) ? true : directionNav;
        this.animation = animation || "slide";
        this.autoSlide =  (typeof autoSlide === "undefined" || autoSlide === null) ? true : autoSlide;
        this.pauseOnHover = (typeof pauseOnHover === "undefined" || pauseOnHover === null) ? true : pauseOnHover;

        this.init();
    };

    FlexSlider.prototype.init = function() {
        $(this.$el).flexslider({
            animation: this.animation,
            slideshow: this.autoSlide,
            pauseOnHover: this.pauseOnHover,
            controlNav: this.controlNav,
            directionNav: this.directionNav
        });
    };

    return FlexSlider;

})();