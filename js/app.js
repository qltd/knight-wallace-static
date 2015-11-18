// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){
    
    $('#main_nav .primary').hover(function(){
        var menu = $(this).attr('data-sub-nav-menu');
        $('.sub-nav-wrap ul').addClass('disappear');
        $('.sub-nav-wrap .'+menu).removeClass('disappear');
    },function(){
        //not doing anything atm 
    });

});
