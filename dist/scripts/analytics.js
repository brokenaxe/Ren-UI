//<!-- Load the Content Experiment JavaScript API client for the experiment -->
 // <script src="//www.google-analytics.com/cx/api.js?experiment=Zk8xfNOrTLiG-3EAdjS3Bw"></script>
 // <script>
  //  // Ask Google Analytics which variation to show the user.
 //   window.chosenVariation = cxApi.chooseVariation();
 // </script>


function gaction(app,action) {
    ga('send', 'event', app, action);
}
function ganalytics(account) {
    (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    (i[r] =
        i[r] ||
        function () {
        (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
    })(
    window,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga',
    );
    ga('create', account, 'auto');
    ga('send', 'pageview');
}