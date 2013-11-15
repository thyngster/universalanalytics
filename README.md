Universal Analytics Snippets
============================

Universal Analytics Snippets are a set of javascript snippets that will ease
you some common tasks while dealing with a implementation.

#How to use:

###Disqus Comments Tracking

Just insert disqus_tracking.js in your pages. It will only try to fire the events in the pages where DISQUS 
commenting system is being loaded.

###Cross Domain Tracking for Forms

        ga(function (tracker) {
            crossForms(['midomain1.com', 'midomain2.eu']);
        });
        
Any form that its action if set to any of the domains passed to the function will be
decorated with the cookies values.
