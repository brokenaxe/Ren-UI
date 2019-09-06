function getUrl(address, target = '_blank') {
	var win = window.open(address, target);
  	win.focus();
}