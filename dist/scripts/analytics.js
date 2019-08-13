function gaction(app,action) {
    ga('send', 'event', app, action);
}
function setga(account) {
    loaderScript(("https:" == document.location.protocol ? "https://" : "http://") + "www.googletagmanager.com/gtag/js?id=" + account)
    .then(() => { 
        gtag('js', new Date());
        gtag('config', account);
        console.log("renui.js [ga.loaded]");
        })
    .catch(() => { 
        console.log("renui.js [error]"); 
    });
    
}
function loaderScript(scriptUrl){
    return new Promise(function (res, rej) {
     let script = document.createElement('script');
     script.src = scriptUrl;
     script.type = 'text/javascript';
     script.onError = rej;
     script.async = true;
     script.onload = res;
     script.addEventListener('error',rej);
     script.addEventListener('load',res);
     document.head.appendChild(script);
  });
}