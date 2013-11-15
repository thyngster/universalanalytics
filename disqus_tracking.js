/**
* disqus_tracking.js v1.0.0 - 2013-11-16
* https://github.com/thyngster/forms_cross_domains.js
* (c) 2013 David Vallejo ( @thyng )
* license: www.opensource.org/licenses/mit-license.php
*
* 
* If using ga.js, just change the ga() call to _gaq.push(['trackEvent','Disqus',{ACTION}, windows.location.href]);
* Disqus is loaded asynchronously and callbacks configuration needs to be set before Disqus si loaded so we basically 
* what we're doing is reseting it with the new callback values on winwdow.load event ( cross-browser compatibility ).
* Modify Event category, action and label to fit your needs.
*
*/

window.onload = function(){
    if(window.DISQUS){
        DISQUS.reset({
              reload: true,
              config: function () {
              this.callbacks.onNewComment = [function(){ ga('send', 'event', 'Disqus', 'New Comment', window.location.href); }];
              this.callbacks.onPaginate = [function(e){ ga('send', 'event', 'Disqus', 'Pagination', window.location.href); }];
              this.callbacks.onPaginate = [function(e){ ga('send', 'event', 'Disqus', 'User Logged', window.location.href); }];
              }
         });
    }
};
