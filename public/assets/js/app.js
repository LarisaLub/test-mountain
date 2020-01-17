$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 68.41"><defs><style>.a{fill:#585858;}</style></defs><title>Asset 6</title><path class="a" d="M34.24,68.41a1.75,1.75,0,0,1-.7-.14,1.54,1.54,0,0,1-.56-.35L.56,35.51A1.81,1.81,0,0,1,0,34.21,1.57,1.57,0,0,1,.56,33L33,.56A1.57,1.57,0,0,1,34.21,0a1.81,1.81,0,0,1,1.3.56A1.75,1.75,0,0,1,36,1.83a1.71,1.71,0,0,1-.49,1.26L4.36,34.24,35.51,65.32a2,2,0,0,1,0,2.6,3,3,0,0,1-.6.35A1.52,1.52,0,0,1,34.24,68.41Z"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 68.41"><defs><style>.a{fill:#585858;}</style></defs><title>Asset 7</title><path class="a" d="M1.16,68.27a3,3,0,0,1-.6-.35,1.79,1.79,0,0,1,0-2.6L31.71,34.24.56,3.09A1.59,1.59,0,0,1,0,1.83,1.62,1.62,0,0,1,.56.56,1.62,1.62,0,0,1,1.83,0,1.6,1.6,0,0,1,3.09.56L35.51,33A1.69,1.69,0,0,1,36,34.21a2,2,0,0,1-.49,1.3L3.09,67.92a2.7,2.7,0,0,1-.59.35,1.55,1.55,0,0,1-.67.14A1.52,1.52,0,0,1,1.16,68.27Z"/></svg>'
        ],
        items: 2, //10 items above 1000px browser width
        itemsDesktop: [992, 2], //5 items between 1000px and 901px
        itemsDesktopSmall: [992, 1], // betweem 900px and 601px
        itemsTablet: [768, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $('.next').click(function() {
        owl.trigger('owl.next');
    });
    $('.prev').click(function() {
        owl.trigger('owl.prev');
    });
});
