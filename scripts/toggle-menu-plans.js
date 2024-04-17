// Menu Bar Toggle
let menuToggleStatus = false;

let menuToggle = function () {
    if (menuToggleStatus === false) {

        $('.fixed-side-bar').css('visibility', 'visible');
        $('.fixed-side-bar').fadeIn(200);
        $('.fixed-side-bar .blur').css('flex', '1');

        menuToggleStatus = true;
    }
    else if (menuToggleStatus === true) {

        $('.fixed-side-bar').css('transition', 'none');
        $('.fixed-side-bar').fadeOut(200);

        if (menuToggleStatus === true && FullMenuStatus === false) {
            $('.fixed-side-bar .fixed-sidebar-logo').css('visibility', 'hidden');
            $('.fixed-side-bar a').fadeOut(0, function () {
                $('.fixed-side-bar .visible').css('width', '100px');
            });
        }

        menuToggleStatus = false;
    }
}

$('.fixed-menu-bar ion-icon').on("click", menuToggle);
$('.fixed-side-bar .blur').on("click", menuToggle);


// Full Menu Toggle
let FullMenuStatus = false;

let FullMenu = function () {
    if (FullMenuStatus === false) {

        $('.fixed-side-bar').css('width', '100vw');
        $('.fixed-side-bar .visible').css('width', '80vw');
        $('.fixed-side-bar .blur').css('width', '20vw');
        $('.fixed-side-bar').css('transition', '.5s all ease');
        $('.fixed-side-bar .fixed-sidebar-logo').css('visibility', 'visible');
        // $('.fixed-side-bar .fa-times').css('z-index', '5000000000000');
        $('.fixed-side-bar a').css('display', 'block');
        $('.fixed-side-bar .fixed-sidebar-logo').fadeIn();
        $('.fixed-side-bar a').fadeIn();


    }

}

$('.fixed-side-bar span').on("click", FullMenu);
$('.fixed-side-bar .visible').on("click", FullMenu);
