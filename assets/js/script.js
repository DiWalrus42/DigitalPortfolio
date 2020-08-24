$(document).ready(function() {
    if (window.location.href.includes('index.html') || window.location.href == "http://127.0.0.1:8080/"|| window.location.href == "http://127.0.0.1:5500/" || window.location.href == "https://github.com/DiWalrus42/DigitalPortfolio") {
        // alert("test");
        const titleText = document.querySelector('.titleText');
        const welcomeMsg = document.querySelector('.welcomeMsg');
        const followAlong = document.querySelector('.followAlong');
        const aboutMein = document.querySelector('.aboutMe');
        const aboutMyCourseIn = document.querySelector('.aboutMyCourse');
        const width = $(window).width();

        if (width > 1440) {
        splitScroll();
        }

        keepStickyNav();

        titleText.classList.add('animated', 'fadeInLeft');
        welcomeMsg.classList.add('animated', 'slideInUp');
        followAlong.classList.add('animated', 'zoomIn');

        $(".followAlong-btn").click(function() {
            $('html, body').animate({
                scrollTop: $(".aboutMe").offset().top
            }, 1000)
            aboutMein.classList.add('animated', 'slideInLeft');
            aboutMyCourseIn.classList.add('animated', 'slideInRight');
        });
    } else if (window.location.href.includes("animations.html")) {
        photoshopAnimation();
        keepStickyNav();
    }

    $(".link-oldPortfolio").css("cursor", "pointer");

    $(".vector").hover(function() {
        if (confirm("I've Talked about this particular topic in my old Portfolio, Want to check it out?")) {
            window.location.href = "";
        }
    });
});


function keepStickyNav() {
    $(window).scroll(function() {
        if ($(window).scrollTop()) {
            $("header").css("background-color", "rgba(10, 36, 47, 0.95)");
            $("header").addClass('sticky');
            aboutMein.classList.add('animated', 'slideInLeft');
            aboutMyCourseIn.classList.add('animated', 'slideInRight');
        } else {
            $("header").css("background-color", "transparent");
            $("header").removeClass('sticky');
            aboutMein.classList.remove('animated', 'slideInLeft');
            aboutMyCourseIn.classList.remove('animated', 'slideInRight');
        }
    });
}

function photoshopAnimation() {
    // Photoshop Animation
    anime.timeline({ loop: true })
        .add({
            targets: '.photoShopAnimation .word',
            scale: [14, 1],
            opacity: [0, 1],
            easing: "easeOutCirc",
            duration: 800,
            delay: (el, i) => 800 * i
        }).add({
            targets: '.photoShopAnimation',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}

function splitScroll() {
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            duration: '100%',
            triggerElement: '.section-One',
            triggerHook: 0
        })
        .setPin('.aboutMe')
        // .addIndicators()
        .addTo(controller);
}

// Toggles drop down menu list
function toggleDropDown() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.projects')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function openPage(page) {
    if (page == 'kitloonpoh') {
        window.open('./assets/website/index.html', '_blank')
    }
    if (page == 'portal') {
        window.open('', '_blank')
    }
    if (page == 'leasing') {
        window.open('', '_blank')
    }
    if (page == 'kinghooman') {
        window.open('https://www.construct.net/en/free-online-games/king-hooman-12269/1575e74b-ee0b-4f52-b82c-82449dc03e33', '_blank')
    }
    if (page == 'platformer') {
        window.open('https://www.construct.net/en/free-online-games/platformer-12821/824c6217-e539-4e87-92f0-4b097fec5060', '_blank')
    }
    if (page == 'ztproject') {
        window.open('', '_blank')
    }
    if (page == 'physics') {
        window.open('', '_blank')
    }
}