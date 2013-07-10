var highlightActiveSection = function() {
    $('.nav li').each(function(i, value) {
        var href = $(value).find("a").attr("href");
        if(href === window.location.pathname || href === window.location.hash) {
            $(value).addClass('active');
        }
    });
};

$(document).ready(function() {
    highlightActiveSection()
    $('.nav li').click(function(event) {
        $('.nav-list li.active').each(function(i, value) {
            $(value).removeClass('active');
        });
        $(event.target).parent().addClass('active');
    });
});

