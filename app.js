$(function() {

    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    // Auth Box
    const modalBtn = document.querySelectorAll('[data-modal]');
    const body = document.body;
    const modalClose = document.querySelectorAll('authbox__close');
    const modal = document.querySelectorAll('.authbox');

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);


    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');

        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show")

        $("html, body").animate({
            scrollTop: elementOffset - 60

        }, 800);
    });

    // navMenu


    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });


    // Auth Box

    modalBtn.forEach(item => {
        item.addEventListener('click', event => {
            let $this = event.currentTarget;
            let modalId = $this.getAttribute('data-modal');
            let modal = document.getElementById(modalId);
            let modalContent = modal.querySelector('.authbox__content')

            modalContent.addEventListener('click', event => {
                event.stopPropagation();
            });

            modal.classList.add('show');
            body.classList.add('no-scroll');

        });
    });

    modalClose.forEach(item => {
        item.addEventListener('click', event => {
            let currentModal = event.currentTarget.closest('.modal');

            closeModal(currentModal);
        });
    });

    modal.forEach(item => {
        item.addEventListener('click', event => {
            let currentModal = event.currentTarget;

            closeModal(currentModal);

        });
    });


    function closeModal(currentModal) {
        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    }
});