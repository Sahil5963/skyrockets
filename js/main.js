// Tranparent navbar

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      if ($(".navbar").hasClass("navbar--transparent")) {
        $(".navbar").removeClass("navbar--transparent");
      }
    } else {
      $(".navbar").addClass("navbar--transparent");
    }
  });

  $(window).scroll(function() {
    if (
      $(document).scrollTop() < 50 &&
      $(".navbar").hasClass("navbar--white")
    ) {
      $(".navbar").removeClass("navbar--transparent");
    }
  });

  //Tooltoips

  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });
});

var tl = new TimelineMax();

tl.to("#hero-banner__rocket", 1, {
  scale: 0.7,
  x: -80,
  rotation: -30,
  y: 400
})

  .to("#hero-banner__rocket", 2, { scale: 1, rotation: 0, x: 120, y: 0 })
  .to("#hero-banner__rocket__fire2", 1, {
    transformOrigin: "initial",
    scaleY: 0.7,
    repeat: -1,
    yoyo: true
  })

  .to("#hero-banner__rocket", 3, {
    rotation: 10,
    y: 12,
    x: 90,
    scale: 0.9,
    repeat: -1,
    yoyo: true
  });

TweenMax.to("#hero-banner__rocket__fire1", 0.3, {
  transformOrigin: "initial",
  scaleY: 1.4,
  repeat: -1,
  yoyo: true
});
TweenMax.to("#hero-banner__rocket__fire2", 1, {
  transformOrigin: "initial",
  scaleY: 1.2,
  repeat: -1,
  yoyo: true
});

TweenMax.to(".hero-banner__smoke--1", 4, {
  opacity: 1,
  yoyo: true,
  repeat: -1,
  x: -220
});

TweenMax.to(".hero-banner__cloud", 1, { y: 0 });
TweenMax.to(".hero-banner__smoke--2", 6, {
  opacity: 1,
  yoyo: true,
  repeat: -1,
  x: 200
});

// MOBILE NAV

var mobileNav = new TimelineMax();

$(".navbar__toggler").click(function() {
  mobileNav

    .to($(".mobile-nav"), 0.1, { display: "block" })
    .to($(".mobile-nav__bg"), 0.3, { scaleY: 1 })
    .to($(".mobile-nav__header"), 0.1, { opacity: 1 })
    .to($(".mobile-nav__list"), 0.4, { opacity: 1 });
});

$(".mobile-nav__toggler").click(function() {
  mobileNav
    .to($(".mobile-nav__list"), 0.4, { opacity: 0 })
    .to($(".mobile-nav__header"), 0.1, { opacity: 0 })
    .to($(".mobile-nav__bg"), 0.5, { scaleY: 0 })
    .to($(".mobile-nav"), 0.1, { display: "none" });
});
