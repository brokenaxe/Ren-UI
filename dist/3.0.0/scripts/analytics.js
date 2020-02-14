function gaction(app,action) {
    gtag('send', 'event', app, action);
}
function setga(account) {
    var address = "https://www.googletagmanager.com/gtag/js?id=" + account;
    load('js',address)
    .then(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', account);
    })
    .catch((address) => {
        console.log("renui.js [failed: " & address & "]"); 
    });
}