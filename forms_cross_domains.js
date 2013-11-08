/**
* forms_cross_domains.js v1.0.0 - 2013-11-08
* https://github.com/thyngster/forms_cross_domains.js
* (c) 2013 David Vallejo ( @thyng )
* license: www.opensource.org/licenses/mit-license.php
* 
* Use:
*     ga(function (tracker) {
*       crossForms(['midomain1.com', 'midomain2.eu']);
*    });
* 
*/

function crossForms(ua_cross_domains) {

    // Let's Itinerate through all page forms
    var allForms = document.getElementsByTagName("form");
    for (var i = 0; i < allForms.length; i++) {
        if (in_array(allForms[i].action, ua_cross_domains))
            addListener(allForms[i], 'submit', decorateForm);
    }

    function decorateForm(event) {

        event = event || window.event; // Cross browser hoops.
        var target = event.target || event.srcElement;
        if (target && target.action) {
            ga(function (tracker) {
                window.linker = window.linker || new window.gaplugins.Linker(tracker); // Create linker object using default tracker.
                target.action = window.linker.decorate(target.action); // Decorate the HTML link.
            });
        }
    }

    function addListener(element, type, callback) {
        if (element.addEventListener) element.addEventListener(type, callback);
        else if (element.attachEvent) element.attachEvent('on' + type, callback);

    }

    function in_array(needle, haystack) {
        for (var i = 0; i < haystack.length; i++) {
            if (needle.indexOf(haystack[i]) > -1)
                return true;
        }
    }
}
