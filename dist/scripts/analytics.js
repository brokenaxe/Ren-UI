function gaction(app,action) {
    ga('send', 'event', app, action);
}
function setga(account) {
    var ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=" + account;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ga, s);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', account);
    console.log("renui.js [ga.loaded]");
}