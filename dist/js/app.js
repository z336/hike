$(document).foundation();

// Hike. hide and show
$(window).scroll(function() {
    if ($(this).scrollTop()>0) {
        $('.left-text').fadeOut();
    } else {
        $('.left-text').fadeIn();
    }
 });

// Responsive menu
function responsiveMenu() {
    var x = document.getElementById("burgerNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}
