function documantationtogglecode(no) {
    $('#preview' + no + '').toggleClass('hide');
    $('#' + no + '').toggleClass('selected');
    $('#title' + no + ', #commands' + no + '').toggleClass('hide');
}