function rensize(file,i,ths,max){
    //alert(file.type);
    if (file.type == "image/jpeg" || file.type == "image/png") {
        var reader = new FileReader();  
        reader.onload = function(readerEvent) {

            var image = new Image();
            image.onload = function(imageEvent) {    
            var max_size = max;
            var w = image.width;
            var h = image.height;
            
            if (w > h) {  if (w > max_size) { h*=max_size/w; w=max_size; }
            } else     {  if (h > max_size) { w*=max_size/h; h=max_size; } }
            
            var canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            canvas.getContext('2d').drawImage(image, 0, 0, w, h);
                
            if (file.type == "image/jpeg") {
                var dataURL = canvas.toDataURL("image/jpeg", 1.0);
            } else {
                var dataURL = canvas.toDataURL("image/png");   
            }
            var id = Math.round(new Date() / 1000) + '' + i
            var tmpContainer = '<div class="width-100p relative" id="container' + id + '"><img id="thisimg' + id + '" src="' + dataURL + '"><div onclick="wipe(\'container' + id + '\');updatecontent(\'#' + $(ths).attr('id') + '\');" class="photodelete"><i class="icon close text-12"></i></div></div>';

            $(ths).find('.viewContent').append(tmpContainer);
                updatecontent(ths);
            }
            image.src = readerEvent.target.result;
        }
        reader.readAsDataURL(file);
    } else {
        alert('Please only select images in JPG- or PNG-format.');  
    }
}
function updatecontent(ths){
    $(ths).find('.uploadContent').val(Base64.encode($(ths).find('.viewContent').html()));
}
function dropHandler(ev,ths,max) {
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (var i = 0; i < ev.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
            if (ev.dataTransfer.items[i].kind === 'file') {
                var file = ev.dataTransfer.items[i].getAsFile();
                //console.log('... file[' + i + '].name = ' + file.name);
                rensize(file,i,ths,max);
            }
        }
    } else {
        // Use DataTransfer interface to access the file(s)
        for (var i = 0; i < ev.dataTransfer.files.length; i++) {
            //console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
            rensize(ev.dataTransfer.files[i],i,ths,max);
        }
    }
}
function dragOverHandler(ev) {
    //console.log('File(s) in drop zone'); 
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}
var fileobj;
function upload_file(e, p) {
    e.preventDefault();
    fileobj = e.dataTransfer.files[0];
    ajax_file_upload(fileobj, p);
}
function file_explorer() {
    document.getElementById('selectfile').click();
    document.getElementById('selectfile').onchange = function () {
        fileobj = document.getElementById('selectfile').files[0];
        ajax_file_upload(fileobj);
    };
}
function ajax_file_upload(file_obj, p) {
    if (file_obj != undefined) {
        var form_data = new FormData();
        form_data.append('file', file_obj);
        $.ajax({
            type: 'POST',
            url: '/upload.aspx?r=' + p,
            contentType: false,
            processData: false,
            data: form_data,
            success: function (response) {
                //alert(response);
                $('#filepath').val(response);
                wipe('clearholder');
            }
        });
    }
}
