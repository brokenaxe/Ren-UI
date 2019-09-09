
var currentDomain = url.hostname;
currentDomain = currentDomain.replace('www.','')
//console.log(currentDomain);

function load(type,address){
    if (type === 'js') {
        return new Promise(function (res, rej) {
            let script = document.createElement('script');
            script.src = address;
            script.type = 'text/javascript';
            script.onError = rej;
            script.async = true;
            script.onload = res;
            script.addEventListener('error',rej);
            script.addEventListener('load',res);
            document.body.appendChild(script);
         });
    } else if (type === 'css') {
        return new Promise(function (res, rej) {
            let style = document.createElement('link');
            style.href = address;
            style.type = 'text/css';
            style.ref = 'stylescheet';
            style.onError = rej;
            style.onload = res;
            style.addEventListener('error',rej);
            style.addEventListener('load',res);
            document.head.appendChild(style);
         });
    }
}
if (document.body.innerHTML.search("/jquery-3.4.1.min") === -1) {
    var address = "https://code.jquery.com/jquery-3.4.1.min.js"; 
    load('js',address)
    .then(() => {
        if (currentDomain === 'ren-ui.com' && document.body.innerHTML.search("/internal.js") === -1) {
            load('js',"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.9/highlight.min.js")
            .then(() => {
                load('js',"http://www.ren-ui.com/Ren-UI/dist/scripts/internal.js")
                .then(() => {})
                .catch(() => {});
            })
            .catch(() => {
                console.log("renui.js [failed:" & url & "]"); 
            });
        } else if (document.body.innerHTML.search("renui.min.js") === -1) {
            //load('js',"https://cdn.jsdelivr.net/gh/brokenaxe/ren-ui/dist/renui-min.js")
            load('js',"http://www.ren-ui.com/Ren-UI/dist/renui-min.js")
            .then(() => {})
            .catch(() => {});
        }
    })
    .catch(() => {});
}
