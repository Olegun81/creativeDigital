'use strict';
(function(){
      $('.slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:true,
        autoplay:true,
        responsive: [
        {
          breakpoint:768,
          settings:{
            arrows:false
          }
        }
        ]

        
  });
       $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
        adaptiveHeight:true,
        responsive: [
        {
        	breakpoint: 961,
        	settings: {
        		slidesToShow: 2
        	
        	}
        },
        {
        	breakpoint:795,
        	settings: {
            arrows:false,
            slidesToShow:2,
            slidesToScroll:1,
            autoplay:true

        	}
        },
         {
          breakpoint:601,
          settings: {
            slidesToShow:1,
            slidesToScroll:1

          }
        }
        ]
        
  });

      

  })();

   var map;
function initMap(){
	var uluru = {lat: 47.101085 , lng: 37.5501973};
	map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
	var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

  $("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});


}