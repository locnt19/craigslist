// $('.craigslist_2 .search-options .search .searchgroup .morecats .linklike').on('click', function() {
// 	$('.craigslist_2 .search-options .search .searchgroup .othercats').toggleClass('active')
// });

$(document).ready(function () {
	$('.craigslist_2 .search-options .search .searchgroup .maincats-2 li.morecats .linklike').on('click', function() {
		$('.craigslist_2 .search-options .search .searchgroup .maincats-2 li.morecats .linklike').toggleClass('active')
	})
	$('.craigslist_2 .search-options .search .searchgroup .maincats-2 li.morecats .linklike').on('click', function() {
		if ($('.craigslist_2 .search-options .search .searchgroup .maincats-2 li.morecats .othercats').is(':hidden') === true) {
			$('.craigslist_2 .search-options .search .searchgroup .maincats-2 li.morecats .othercats').slideDown('slow')
			$('.craigslist_2 .search-options .search .searchgroup .maincats-2 li.morecats .othercats').addClass('active')
		} else {
			$('.craigslist_2 .search-options .search .searchgroup .maincats-2 li.morecats .othercats').slideUp('slow')
			$('.craigslist_2 .search-options .search .searchgroup .maincats-2 li.morecats .othercats').removeClass('active')
		}
	});
})
function showHideMap() {
    var u = $('.craigslist_2 .map')
    var i = $('.craigslist_2 .map .hidemap')
    var s = $('.craigslist_2 .project .list-items .project-list .box')
    var a = $('.craigslist_2 .project .list-items .category .category-nav .list-style .showmap')
    var x = $('.craigslist_2 .project .list-items')
    i.on('click', function() {
        a.show()
        $('.map').hide('fast')
        x.css({
            'width': '100%'
        })
        if ($('.craigslist_2 .project .list-items .category .category-nav .list-style .list-2').hasClass('active') == true) {
            $('.craigslist_2 .col-mod').css({
                'flex': '0 0 25%',
                'max-width': "25%"
            })
        }
        $('.craigslist_2 .project .list-items .project-list').css({
            'height': 'auto',
            'overflow-y': 'initial'
        })
        $('.canhcam-pagination-1').show()

    })
    a.on('click', function() {
        $(this).hide()
        $('.craigslist_2 .map').show()
        x.css({
            'width': '100%'
        })
        if ($('.craigslist_2 .project .list-items .category .category-nav .list-style .list-2').hasClass('active') == true) {
            $('.craigslist_2 .col-mod').css({
                'flex': '0 0 33.3333333333%',
                'max-width': "33.3333333333%"
            })
        }
        $('.craigslist_2 .project .list-items .project-list').css({
            'padding-right': '5px',
            'margin-right': '1px'
        })
        $('.craigslist_2 .project .list-items .project-list').css({
            'height': '594px',
            'overflow-y': 'auto'
        })
        $('.canhcam-pagination-1').hide()


    })
}

function changeStyleList() {
    var i = $('.craigslist_2 .project .list-items .category .category-nav .list-style .nav-item')
    var x = $('.craigslist_2 .project .list-items .category .category-nav .list-style .list-1')
    var y = $('.craigslist_2 .project .list-items .category .category-nav .list-style .list-2')
    var m = $('.craigslist_2 .project .list-items .project-list')
    i.on('click', function() {
        i.removeClass('active')
        $(this).addClass('active')
    })
    x.on('click', function() {
        $('.craigslist_2 .col-mod').css({
            'flex': '0 0 100%',
            'max-width': "100%"
        })
        m.addClass('active')
    })
    y.on('click', function() {
        if ($('.craigslist_2 .map').is(':hidden') == true) {
            $('.craigslist_2 .col-mod').css({
                'flex': '0 0 25%',
                'max-width': "25%"
            })
        } else {
            $('.craigslist_2 .col-mod').css({
                'flex': '0 0 33.3333333333%',
                'max-width': "33.3333333333%"
            })
        }
        m.removeClass('active')
    })

}

function checkScroll() {
    if ($('.craigslist_2 .project .list-items .project-list .map').is(':hidden') == true) {
        console.log(1)
    } else {
        $('.craigslist_2 .project .list-items .project-list').css({
            'height': '594px',
            'overflow-y': 'auto'
        })
    }

}

function mobileModal() {
    $('.craigslist_2 .map-mobile .map-title .close').on('click', function() {
        $('.craigslist_2 .map-mobile').slideUp()
    })
    $('.craigslist_2 .filter-mobile .filter-title .close').on('click', function() {
        $('.craigslist_2 .filter-mobile').slideUp()
    })
    $('.craigslist_2 .project .list-items .project-list .project-style .nav .nav-item .mmap').on('click', function() {
        $('.craigslist_2 .map-mobile').slideDown()
    })
    $('.craigslist_2 .project .list-items .project-list .project-style .nav .nav-item .mfilter').on('click', function() {
        $('.craigslist_2 .filter-mobile').slideDown()
    })
}

function clearCheckbox() {
    $('.craigslist_2 .filter-mobile .clearcheck').on('click', function() {
        $('.craigslist_2 .filter-mobile .filter-content .filter-item .form-filter input[type=checkbox]').prop('checked', false);
    })
}
$(document).ready(function() {
    clearCheckbox()
    changeStyleList()
    showHideMap()
    mobileModal()
})
