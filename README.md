Universal Analytics Snippets
============================

Universal Analytics Snippets are a set of javascript snippets that will ease
you some common tasks while dealing with a implementation.

#How to use:

###Cross Domain Tracking for Forms

        ga(function (tracker) {
            crossForms(['midomain1.com', 'midomain2.eu']);
        });
        
Any form that its action if set to any of the domains passed to the funcion will be
decorated with the cookies values.
