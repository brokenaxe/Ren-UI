function get(pg,id) {
    $('#loading').removeClass('hide');
	if ($("#" + id).length > 0) {
        $.ajax({
            method: "GET",
            url: pg,
			cache: false,
            success: function(html){
                hndl(id,html);
            }, error: function(data) {
                error(data);
			}
        });
    }
    event.preventDefault();
}
