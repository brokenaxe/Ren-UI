function gaction(app,action) {
    gtag('send', 'event', app, action);
}
function setga(account) {
    var address = ("https:" == document.location.protocol ? "https://" : "http://") + "www.googletagmanager.com/gtag/js?id=" + account;
    load('js',address)
    .then(() => {
        gtag('js', new Date());
        gtag('config', account);
    })
    .catch((address) => {
        console.log("renui.js [failed: " & address & "]"); 
    });
}