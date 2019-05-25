;(function() {
	"use strict";

	let bestSlider = $('#best');

	bestSlider.slick({
		slide: '.ba-offer',
		infinite: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: bestSlider.find('[data-prev]'),
		nextArrow: bestSlider.find('[data-next]')
	});
	
	//Mob nav toggle
	const menuToggleBtn = $('.ba-menu-toggle, .ba-overlay');
	const mobNav = $('.ba-mob-nav');

	menuToggleBtn.on('click', () => mobNav.toggleClass('ba-open'));

	//Add map
		function initMap() {
			//Create map and asign to this baMap var
			let mapCenter = {
				lat: 40.679931,
				lng: -73.899009
			};
			let baMap = new google.maps.Map(document.getElementById('ba-map'), {
			center: mapCenter,
			zoom: 12,
		  });

		  let cities = {
			br: {lat: 40.679931,lng: -73.899009}
		  };
		  let mapMarkers = {};

		  for(let city in cities){
			
			let marker = new google.maps.Marker(
				{
					position: cities[city],
					 map: baMap,
					 icon: 'img/2-layers.svg'	
				  }
			  );
		  }
		  // The marker, positioned at Uluru
		  
		  baMap.setCenter(mapCenter);

		  $('#city-select').on('change', function (e) {
			  baMap.panTo(cities[this.value]);
		  })
		}
		$(document).ready(function (e){
			initMap();
		});


})();

