$(document).ready(function(){
  	var elements = document.getElementsByTagName("h1");
  	for (var s=0; s<elements.length; s++){
  		var strings = elements[s].innerHTML.split(' ');
  		var replacement = '';

		for (i = 0; i < strings.length; i++) {
			if (strings[i] == '&amp;'){
				replacement += '& ';
			} else {
				var end = strings[i].slice(1,strings[i].length);
				console.log(strings[i][0]);
			    replacement += ('<span class=first_letter>'+strings[i][0]+'</span>'+end+' ');
			}
		}
		elements[s].innerHTML = replacement;
  	}

	var elements = document.getElementsByTagName("h2");
	for (var s=0; s<elements.length; s++){
		var strings = elements[s].innerHTML.split(' ');
		var replacement = '';

		for (i = 0; i < strings.length; i++) {
			if (strings[i] == '&amp;'){
				replacement += '& ';
			} else {
				var end = strings[i].slice(1,strings[i].length);
				console.log(strings[i][0]);
				replacement += ('<span class=first_letter>'+strings[i][0]+'</span>'+end+' ');
			}
		}
	elements[s].innerHTML = replacement;
	}

	$('.header').load("components/header.html");
	$('.footer').load("components/footer.html");
	$('.nav').load("components/nav.html");
});

