$(document).ready(function () {

	//#region number rate
	$('.details .center .numbrate').on('click', function () {
		$('.details .center .numbrate .more').toggleClass('d-none');
	});
	//#endregion

	//#region gallery
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
		},
		loop: true,
		loopedSlides: 4
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		loop: true,
		loopedSlides: 4,
		slidesPerView: 4,
		breakpoints: {
			480: {
				slidesPerView: 3,
				spaceBetween: 10
			},
		}
	});
	galleryTop.controller.control = galleryThumbs;
	galleryThumbs.controller.control = galleryTop;
	//#endregion

	//#region button contact now
	$('.details .right .replynow').on('click', function () {
		if ($('.details .right .phone').is(':hidden') === true) {
			$('.details .right .phone').slideDown('slow')
			$('.details .right .phone').addClass('active')
		} else {
			$('.details .right .phone').slideUp('slow')
			$('.details .right .phone').removeClass('active')
		}
	});
	//#endregion
	
});

//#region google map
var citymap = {
	chicago: {
		center: {
			lat: 41.878,
			lng: -87.629
		},
		population: 2714856
	},
	newyork: {
		center: {
			lat: 40.714,
			lng: -74.005
		},
		population: 8405837
	},
	losangeles: {
		center: {
			lat: 34.052,
			lng: -118.243
		},
		population: 3857799
	},
	vancouver: {
		center: {
			lat: 49.25,
			lng: -123.1
		},
		population: 603502
	}
};

function initMap() {
	// Create the map.
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: {
			lat: 37.090,
			lng: -95.712
		},
		mapTypeId: 'terrain'
	});

	// Construct the circle for each value in citymap.
	// Note: We scale the area of the circle based on the population.
	for (var city in citymap) {
		// Add the circle for this city to the map.
		var cityCircle = new google.maps.Circle({
			strokeColor: '#2ecc71',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#2ecc71',
			fillOpacity: 0.35,
			map: map,
			center: citymap[city].center,
			radius: Math.sqrt(citymap[city].population) * 100
		});
	};
}
//#endregion
