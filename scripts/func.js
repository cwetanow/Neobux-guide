function scroll() {
    $('.navigation-btn').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
                || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top-100;
                $('html,body')
                    .animate({ scrollTop: targetOffset }, 1000);
                return false;
            }
        }
    });
}

function changeActive() {
    $('.navbar-nav a').click(function () {
        $('.active').removeClass('active');
        $(this).parent().addClass('active');
    });
}

function goHome(){
    $('.navbar-brand').click(function(){
        $('.active').removeClass('active');
    });
}

function closeNav(){
    
    $('.navigation-btn').click(function(){
        $('.in').removeClass('in');
        $('.in').attr('aria-expanded','false');
    });
}