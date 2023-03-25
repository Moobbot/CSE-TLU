(function ($) {
  "use strict";
  $(document).ready(function () {
    /* Content appear */
    if ($("body").hasClass("content-appear")) {
      $("body").addClass("content-appearing");
      setTimeout(function () {
        $("body").removeClass("content-appear content-appearing");
      }, 800);
    }
    /* Preloader */
    setTimeout(function () {
      $(".preloader").fadeOut();
    }, 500);
    /* Scroll */
    // if (jQuery.browser.mobile == false) {
    //   function initScroll() {
    //     $(".custom-scroll").jScrollPane({
    //       autoReinitialise: true,
    //       autoReinitialiseDelay: 100,
    //     });
    //   }

    //   initScroll();

    //   $(window).resize(function () {
    //     initScroll();
    //   });
    // }

    /* Scroll - if mobile */
    if (jQuery.browser.mobile == true) {
      $(".custom-scroll").css("overflow-y", "scroll");
    }
    /* Switch sidebar to compact */
    if (matchMedia) {
      var mq = window.matchMedia("(min-width: 768px) and (max-width: 991px)");
      mq.addListener(WidthChange);
      WidthChange(mq);
    }

    function WidthChange(mq) {
      if (mq.matches) {
        $("body").addClass("compact-sidebar");
        $(".site-sidebar li.with-sub").find(">ul").slideUp();
      } else {
        $("body").removeClass("compact-sidebar");
        sidebarIfActive();
      }
    }
    /* Fullscreen */
    $(".toggle-fullscreen").click(function () {
      $(document).toggleFullScreen();
    });
    /* Sidebar - on click */
    $(".site-sidebar li.with-sub > a").click(function (e) {
      e.preventDefault();
      if (!$("body").hasClass("compact-sidebar")) {
        if ($(this).parent().hasClass("active")) {
          $(this).parent().removeClass("active");
          $(this).parent().find(">ul").slideUp();
        } else {
          if (!$(this).parent().parent().closest(".with-sub").length) {
            $(".site-sidebar li.with-sub")
              .removeClass("active")
              .find(">ul")
              .slideUp();
          }
          $(this).parent().addClass("active");
          $(this).parent().find(">ul").slideDown();
        }
      }
    });

    /* Sidebar - if active */
    function sidebarIfActive() {
      $(".site-sidebar ul > li:not(.with-sub)").removeClass("active");
      var url = window.location;
      var element = $(".site-sidebar ul > li > a").filter(function () {
        return this.href == url || url.href.indexOf(this.href) == 0;
      });
      element.parent().addClass("active");

      $(".site-sidebar li.with-sub").removeClass("active").find(">ul").hide();
      var url = window.location;
      var element = $(".site-sidebar ul li ul li a").filter(function () {
        return this.href == url || url.href.indexOf(this.href) == 0;
      });
      element.parent().addClass("active");
      element.parent().parent().parent().addClass("active");

      if (!$("body").hasClass("compact-sidebar")) {
        element.parent().parent().slideDown();
      }
    }
    sidebarIfActive();
    /* Sidebar - show and hide */
    $(".site-header .sidebar-toggle-first").click(function () {
      if ($("body").hasClass("site-sidebar-opened")) {
        $("body").removeClass("site-sidebar-opened");
        if (jQuery.browser.mobile == false) {
          $("html").css("overflow", "auto");
        }
      } else {
        $("body").addClass("site-sidebar-opened");
        if (jQuery.browser.mobile == false) {
          $("html").css("overflow", "hidden");
        }
      }
    });

    $(".site-header .sidebar-toggle-second").click(function () {
      var compact = "compact-sidebar";

      if ($("body").hasClass(compact)) {
        $("body").removeClass(compact);
        sidebarIfActive();
      } else {
        $("body").addClass(compact);
        $(".site-sidebar li.with-sub").find(">ul").slideUp();
      }
    });

    /* Sidebar - overlay */
    $(".site-overlay").click(function () {
      $(".site-header .sidebar-toggle-first").removeClass("active");
      $("body").removeClass("site-sidebar-opened");
      if (jQuery.browser.mobile == false) {
        $("html").css("overflow", "auto");
      }
    });

    /* Sidebar second - toggle */
    $(".toggle-button-second").click(function () {
      $(".template-options").toggle();
      $(".template-options").removeClass("opened");
      $(this).toggleClass("active");
      $(".site-sidebar-second").toggleClass("opened");
    });
    /*  Tooltip */
    $('[data-toggle="tooltip"]').tooltip();

    /*  Popover */
    $('[data-toggle="popover"]').popover();
    /* Datatable*/
    $('#example').DataTable();
    
  });
  $(document).mouseup(function (e) {});
  window.addEventListener("mouseover", function (e) {
    var container = $("name");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      //code here
    }
  });
  window.addEventListener("load", function () {});
})(window.jQuery);
