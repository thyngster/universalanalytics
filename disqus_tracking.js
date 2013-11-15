// Disqus is loaded asynchronously so let's wait till window has been fully loaded.
// If using ga.js, just change the ga() call to _gaq.push(['trackEvent','Disqus',{ACTION}, windows.location.href]);

window.onload = function(){
    DISQUS.reset({
          reload: true,
          config: function () {
          this.callbacks.onNewComment = [function(){ ga('send', 'event', 'Disqus', 'New Comment', window.location.href); }];
          this.callbacks.onPaginate = [function(e){ ga('send', 'event', 'Disqus', 'Pagination', window.location.href); }];
          }
     });
};
