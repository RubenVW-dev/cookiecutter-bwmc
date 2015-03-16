{{cookiecutter.project_name}}.ResizeChecker = (function(){

    var images;

    function ResizeChecker() {
        _.bindAll(this, 'init', 'setSize');
        this.init();
    };

    ResizeChecker.prototype.init = function() {
        this.images = $('body').find('.news-item');
        window.resizeInterval = setInterval(this.setSize, 500);
        this.images.find('img').load(this.setSize);
        $(window).resize(this.setSize);
    };

    ResizeChecker.prototype.setSize = function(){
        clearInterval(window.resizeInterval);
        if($(window).width() > 850){
            var maxHeight = 0;
            
            this.images.each(function(){
                if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
            });

            this.images.height(maxHeight);
        }else{
            $(document).find('.product-info').addClass('hidden');
            $(document).find('figcaption').removeClass('hidden');
            this.images.height('auto');
        }
    };

    return ResizeChecker;

})();