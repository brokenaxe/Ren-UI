function wipe(id) {
	$('#' + id).remove();
}
function wipeClass(thisClass) {
	$('.' + thisClass).remove();
}
function clear(id) {
	$('#' + id).html('');
}
function clearClass(thisClass) {
    document.querySelector('.' +  + thisClass + '').innerHTML = "";
}
function addClass(from,set) {
    if ($(from).length > 0) {
        $(from).each(function (index) {
            $(this).addClass(set);
        });
    }
}
function removeClass(from,set) {
    if ($(from).length > 0) {
        $(from).each(function (index) {
            $(this).removeClass(set);
        });
    }
}
function greeting(from,to) {
	if (to === 'text') {
		var data = [
			[22, 'Working late'],
			[18, 'Good evening'],
			[12, 'Good afternoon'],
			[5,  'Good morning'],
			[0,  'Whoa, early bird']
		],
		hr = new Date().getHours();
		for (var i = 0; i < data.length; i++) {
			if (hr >= data[i][0]) {
				$(from).html(data[i][1]);
				break;
			}
		} 
	} else if (to === 'bg') {
		var data = [
			[22, 'navy'],
			[18, 'purple'],
			[12, 'orange'],
			[5,  'blue'],
			[0,  'aqua']
		],
		hr = new Date().getHours();
		for (var i = 0; i < data.length; i++) {
			if (hr >= data[i][0]) {
				$(from).addClass(data[i][1]);
				break;
			}
		} 
	} else if (to === 'icon') {
		var data = [
			[22, 'moon'],
			[18, 'sun-cloud'],
			[12, 'sun'],
			[5,  'sun-cloud'],
			[0,  'stary']
		],
		hr = new Date().getHours();
		for (var i = 0; i < data.length; i++) {
			if (hr >= data[i][0]) {
				$(from).addClass(data[i][1]);
				break;
			}
		} 
	}
}