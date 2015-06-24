
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; 
  s.parentNode.insertBefore(ga, s);
})();

var _gaq = _gaq || [];
 _gaq.push(['_setAccount', 'UA-58518858-1']);
_gaq.push(['_trackPageview']);


chrome.extension.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});







function onWindowLoad() {
  
  var message = document.querySelector('#message');

     chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {

    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.extension.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
    }
  });

}

window.onload = onWindowLoad;

