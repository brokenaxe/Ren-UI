function post(pg,id,fid) {
    preloader(fid);
    $.ajax({
        type: 'POST',
        url: pg,
        data: $(fid).serialize(),
        success: function (html) {
            hndl(id,html);
        }, error: function(data) {
            error(data);
        }
    });
    if (event !== undefined) {
        event.preventDefault();
    }
}
