function post(pg,id,fid) {
    $('#loading').removeClass('hide');
    $(fid).find('.toload').addClass('loading');
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

    event.preventDefault();
}
