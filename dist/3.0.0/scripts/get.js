function get(pg,id) {
    preloader(id);
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
    if (event !== undefined) {
        event.preventDefault();
    }
}
