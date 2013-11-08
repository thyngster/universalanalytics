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
