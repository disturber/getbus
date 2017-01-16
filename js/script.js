//BUTTON-->//   
var dropDownMenu = $(".dropdown_menu");
        
$(document).on('click', '#nav-icon', function(){

    if ( $(this).hasClass('open') ) {

        $(this).removeClass('open');

        dropDownMenu.slideUp();

    } else {

        $(this).addClass('open');

        dropDownMenu.slideDown();
    }
    return false;
        
});

//close side menu if click outside this menu
$(document).on('click', function(event) {
    if ( !$(event.target).closest('.dropdown_menu').length && !$(event.target).hasClass('nav-icon')) {
			
        $('#nav-icon').removeClass('open');

        dropDownMenu.slideUp();
    }
});
    
//<--END BUTTON //

// переходы по клику на кнопки

$(document).on('click', '.js-nav, .js-dropdown', function () {
    scrollToAnchor($(this));
    return false;
});

    function scrollToAnchor(el) {
        
        var body = $('body,html');

        var elementClick = el.attr('data-href');

        var destination = $('[data-id="' + elementClick + '"]').offset().top;
        
        body.stop().animate({
            scrollTop: destination
        }, 400);
        // el.click()
    }

//POPup
	
$(document).on('click', '.js-video', function (){
    
    $(".video-popup__overlay").addClass('opened-popup');
    $(".video-popup__popup").addClass('opened-popup');
        
    return false;
});	

$(document).on('click', '[data-video-popup="close"]', function (){

    $(".video-popup__overlay").removeClass('opened-popup');
    $(".video-popup__popup").removeClass('opened-popup');

});