$(document).ready(function () {
  /* Template options - toggle */
  $(".template-options .to-toggle").click(function () {
    $(".template-options").toggleClass("opened");
  });

  /* Chat */
  $(".sidebar-chat a, .sidebar-chat-window a").click(function () {
    $(".sidebar-chat").toggle();
    $(".sidebar-chat-window").toggle();
  });

  /* Switchery */
  $(".js-switch").each(function () {
    new Switchery($(this)[0], $(this).data());
  });

  /* Template options */
  $(".template-options input:checkbox").change(function () {
    if ($("body").hasClass("fixed-footer")) {
      $("body").removeClass("fixed-footer");
    }

    var setting = $(this).attr("name");

    if ($("body").hasClass(setting)) {
      $("body").removeClass(setting);
      if (setting == "compact-sidebar") {
        sidebarIfActive();
      }
      if (setting == "fixed-header") {
        $("body").removeClass("fixed-sidebar");
        $('.template-options input[name="fixed-sidebar"]').prop(
          "checked",
          false
        );
      }
      if (setting == "boxed-wrapper") {
        $('.template-options input[name="fixed-header"]')
          .parent()
          .parent()
          .removeClass("disabled");
        $('.template-options input[name="fixed-sidebar"]')
          .parent()
          .parent()
          .removeClass("disabled");
      }
    } else {
      $("body").addClass(setting);
      if (setting == "compact-sidebar") {
        $(".site-sidebar li.with-sub").find(">ul").slideUp();
      }
      if (setting == "fixed-sidebar") {
        $("body").addClass("fixed-header");
        $('.template-options input[name="fixed-header"]').prop("checked", true);
      }
      if (setting == "boxed-wrapper") {
        $("body").removeClass("fixed-header");
        $('.template-options input[name="fixed-header"]').prop(
          "checked",
          false
        );
        $('.template-options input[name="fixed-header"]')
          .parent()
          .parent()
          .addClass("disabled");
        $("body").removeClass("fixed-sidebar");
        $('.template-options input[name="fixed-sidebar"]').prop(
          "checked",
          false
        );
        $('.template-options input[name="fixed-sidebar"]')
          .parent()
          .parent()
          .addClass("disabled");
        $("body").removeClass("static");
        $('.template-options input[name="static"]').prop("checked", false);
      }
      if (setting == "static") {
        $("body").removeClass("fixed-header");
        $('.template-options input[name="fixed-header"]').prop(
          "checked",
          false
        );
        $('.template-options input[name="fixed-header"]')
          .parent()
          .parent()
          .removeClass("disabled");
        $("body").removeClass("fixed-sidebar");
        $('.template-options input[name="fixed-sidebar"]').prop(
          "checked",
          false
        );
        $('.template-options input[name="fixed-sidebar"]')
          .parent()
          .parent()
          .removeClass("disabled");
        $("body").removeClass("boxed-wrapper");
        $('.template-options input[name="boxed-wrapper"]').prop(
          "checked",
          false
        );
      }
    }
  });

  $(".template-options input:radio").change(function () {
    var setting = $(this).val();

    $("body").removeClass(function (index, css) {
      return (css.match(/(^|\s)skin-\S+/g) || []).join(" ");
    });

    $("body").addClass(setting);

    if (
      setting == "skin-default" ||
      setting == "skin-2" ||
      setting == "skin-3"
    ) {
      $(".site-header .navbar")
        .removeClass("navbar-dark")
        .addClass("navbar-light");
    } else {
      $(".site-header .navbar")
        .removeClass("navbar-light")
        .addClass("navbar-dark");
    }

    if (setting == "skin-3" || setting == "skin-4") {
      $(".site-header .navbar .navbar-left .toggle-button.dark")
        .removeClass("dark")
        .addClass("light");
      $(".site-header .navbar .navbar-left .toggle-button-second.dark")
        .removeClass("dark")
        .addClass("light");
    } else {
      $(".site-header .navbar .navbar-left .toggle-button.light")
        .removeClass("light")
        .addClass("dark");
      $(".site-header .navbar .navbar-left .toggle-button-second.light")
        .removeClass("light")
        .addClass("dark");
    }

    if (
      setting == "skin-default" ||
      setting == "skin-2" ||
      setting == "skin-3"
    ) {
      $(".site-header .navbar .navbar-right .toggle-button.dark")
        .removeClass("dark")
        .addClass("light");
      $(".site-header .navbar .navbar-right .toggle-button-second.dark")
        .removeClass("dark")
        .addClass("light");
    } else {
      $(".site-header .navbar .navbar-right .toggle-button.light")
        .removeClass("light")
        .addClass("dark");
      $(".site-header .navbar .navbar-right .toggle-button-second.light")
        .removeClass("light")
        .addClass("dark");
    }

    if (
      setting == "skin-default" ||
      setting == "skin-2" ||
      setting == "skin-6"
    ) {
      $(".site-sidebar .custom-scroll")
        .removeClass("custom-scroll-dark")
        .addClass("custom-scroll-light");
      $(".site-sidebar .progress-widget")
        .removeClass("progress-widget-dark")
        .addClass("progress-widget-light");
    } else {
      $(".site-sidebar .custom-scroll")
        .removeClass("custom-scroll-light")
        .addClass("custom-scroll-dark");
      $(".site-sidebar .progress-widget")
        .removeClass("progress-widget-light")
        .addClass("progress-widget-dark");
    }
  });

  /* Hide on outside click */
  $(document).mouseup(function (e) {
    var container = $(
      ".template-options, .site-sidebar-second, .toggle-button-second"
    );

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.removeClass("opened");
      $(".template-options").show();
      $(".toggle-button-second").removeClass("active");
    }
  });
});
