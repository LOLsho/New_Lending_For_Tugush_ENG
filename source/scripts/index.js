console.log('in index.js');

// import * as $ from 'jquery';
// import * as scrollto from 'jquery.scrollto';


document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){

	const nav = $('.header__link');

	console.log(nav);

	nav.click(function (event) {
		let current_scroll = window.pageYOffset,
			button = $(event.target),
			target_href = button.attr('href'),
			target_section = $(target_href),
			target_scroll = target_section.offset();

		event.preventDefault();
		target_scroll.top = target_scroll.top - 76;
		$.scrollto(target_scroll, 350);


	});

}



