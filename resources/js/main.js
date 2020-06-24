$(document).ready(function(){
    //MIXITUP
    var mixer = mixitup('.grid-work-container');
    //WOW
    new WOW().init();
    //SCROLLIFY
    $.scrollify({
        section : ".scrollify",
        setHeights: false,
        updateHash: false,
      });
    //SCROLLUP  
    $.scrollUp({
        scrollText: false,
    });
    //SMOOTH SCROLL
    $("a[href^='#'],.scroll-down").click(function(e) {
        e.preventDefault();
        
        var position = $($(this).attr("href")).offset().top;
    
        $("body, html").animate({
            scrollTop: position
        },1000 );
        return false;
    });
});

function openMenu(){
    document.getElementById('navbar').style.height = "100%";
}
function closeMenu(){
    document.getElementById('navbar').style.height = "0%";
}