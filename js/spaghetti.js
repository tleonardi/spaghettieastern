$(document).ready(function() {
	/* Scroll event handler */
	$(window).bind('scroll',function(e){
    	if($(window).width() > 979){
    		parallaxScroll();
    	}
    imgVerticalCenter();
	});
	
	
	if(window.location.pathname.match("percorso.html")){
		// We'll target all AREA elements with alt tags (Don't target the map element!!!)
		$('area').qtip(
		{
			content: {
				attr: 'alt' // Use the ALT attribute of the area map for the content
			},
			position: {
				my: 'bottom left',
				at: 'top right'
		},
			style: {
				classes: 'ui-tooltip-tipsy ui-tooltip-shadow'
			}
		});
	}

});

$( window ).resize(function() {
  imgVerticalCenter();
});

	/* Scroll the background layers */
	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		$('.parallax').css('top',(scrolled)+'px');
	}
	
	/* 	Sets the top margin of all images of class "imgctr"
		to half the height of the parent's parent height
		(minus the height of the image itself) */
	function imgVerticalCenter(){
		image = $('.imgctr');
		image.each(function( index ) {
			parentHeight=$(this).parent().parent().height()
			$(this).css('margin-top',((parentHeight-$(this).height())/2)+'px');
		});
		
	}
	
	function getDonations(){
		var tot;
		$.ajax({
    		url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('https://spreadsheets.google.com/feeds/cells/0AtKS0X_0E8oEdDFWazhIM1B4b2VMcWRhMXdkb0lBd3c/od5/public/basic?range=D2&alt=rss'),
    		dataType: 'json',
    		async: false,
        	success: function(data) {
            	tot = data.responseData.feed.entries[0].content;
            	$('.donationsTotal').text(tot);
            	console.log(data);

        	} 
  		});
	}
	
	