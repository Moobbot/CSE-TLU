(function($) {
    "use strict";
    $(document).ready(function() {});
    $(document).mouseup(function(e) {});
    window.addEventListener("mouseover", function(e) {
        var container = $("name");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            //code here
        }
    });
    window.addEventListener("load", function() {});
})(window.jQuery);
