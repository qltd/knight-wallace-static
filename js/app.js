// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){
    var active_menu;

    $('#main_nav .primary').hover(function(){
        //on mouse in
        var menu = $(this).attr('data-sub-nav-menu');
        $('#main_nav .primary').removeClass('active'); 
        $(this).addClass('active');
        $('.sub-nav-wrap ul').addClass('disappear');
        $('.sub-nav-wrap .'+menu).removeClass('disappear');
    },function(){
        //on mouse out
        var menu = $('#main_nav .primary.active').attr('data-sub-nav-menu');
        $('.sub-nav-wrap ul').addClass('disappear');
        $('.sub-nav-wrap .'+menu).removeClass('disappear');
    });

    $('#main_nav').hover(function(active_menu){
        //on mouse in 
        //grab original active menu 
        active_menu = $(this).attr('data-sub-nav-menu');
    },function(active_menu){
        //on mouse out 
        $('#main_nav .primary').removeClass('active'); 
        $('#main_nav .primary'+active_menu).addClass('active');
    });

});
