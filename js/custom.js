/**	
	* Template Name: MU Material
	* Version: 1.0	
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS
	
	1. MOBILE MENU
	2. EXPERIENCE SLIDER (Owl Carousel)
	3. EDUCATION SLIDER (Owl Carousel)
	4. PORTFOLIO SLIDER
	5. COUNTER
	6. TESTIMONIAL SLIDER (Owl Carousel)	
	7. MENU SMOOTH SCROLLING
	8. PRELOADER
	9. CALL TO ABOUT
	10. BOTTOM TO UP 
	11. PARALLAX HEADER
	12. HIRE ME SCROLL
	
	
**/

/**JQuery for form */

jQuery(document).ready(function($){
	$('#send_message').click(function(e){
	 e.preventDefault();
	 var error = false;
	 var topic = $('#topic').val();
	 var name = $('#name').val();
	 var email = $('#email').val();
	 var subject = $('#subject').val();
	 var message = $('#message').val();
	 if (topic.length == 0){
	  var error = true;
	  $('.contact_topic')
	   .queue(function(){$(this).addClass('error').dequeue();})
	   .delay(5000)
	   .queue(function(){$(this).removeClass('error').dequeue();});
	 } else {
	  $('#topic').removeClass('error');
	 }
	 if (name.length == 0){
	  var error = true;
	  $('.contact_name')
	   .queue(function(){$(this).addClass('error').dequeue();})
	   .queue(function(){$(this).attr('placeholder', 'Please type your name').dequeue();})
	   .delay(5000)
	   .queue(function(){$(this).removeClass('error').dequeue();});
	 } else {
	  $('.contact_name').removeClass('error');
	 }
	 if (email.length == 0 || email.indexOf('@') == '-1'){
	  var error = true;
	  $('.contact_email')
	   .queue(function(){$(this).addClass('error').dequeue();})
	   .queue(function(){$(this).attr('placeholder', 'Please enter your email').dequeue();})
	   .delay(5000)
	   .queue(function(){$(this).removeClass('error').dequeue();})
	  } else {
	   $('.contact_email').removeClass('error')
	}
	if (subject.length == 0){
	 var error = true;
	 $('.contact_subject')
	  .queue(function(){$(this).addClass('error').dequeue();})
	  .queue(function(){$(this).attr('placeholder','Please write a subject').dequeue();})
	  .delay(5000)
	  .queue(function(){$(this).removeClass('error').dequeue();});
	} else {
	 $('.contact_subject').removeClass('error')
	}
	if (message.length == 0){
	 var error = true;
	 $('.contact_message')
	  .queue(function(){$(this).addClass('error').dequeue();})
	  .queue(function(){$(this).attr('placeholder', 'Please type your message').dequeue();})
	  .delay(5000)
	  .queue(function(){$(this).removeClass('error').dequeue();});
	} else {
	 $('.contact_message').removeClass('error');
	}
	if (error == true) {
	 $('#send_message')
	  .queue(function(next) { 
	   $(this).html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/error.svg" type="image/svg+xml"></object> Please correct the errors');
	   next();
	   $(this).dequeue();
	  })
	  .delay(5000)
	  .queue(function(next) {
	   $(this).html('Send Message');
	   next();
	   $(this).dequeue();
	  });
	} else if (error == false){
	 $('#send_message')
	  .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/send.svg" type="image/svg+xml" height="32" style="margin:-10px -5px!important;"></object> Sending')
	  .delay(2000)
	  .queue(function(next) {
	   $.post("send_email.php", $("#contact_form").serialize(),function(result){
		var r = result;
		if (r == 1){
		 $('#contact_form')[0].reset();
		 $('#send_message')
		  .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/success.svg" type="image/svg+xml"></object> Message Sent')
		  .delay(5000)
		  .queue(function(next) {
		   $(this).html('Send Message'); next();
		  });
		 } else {
		  $('#send_message')
		   .html('<object data="http://eliwedel.com/ewpd/demos/jquery-contact-form-v2/error.svg" type="image/svg+xml"></object> Something went wrong. Please try again later.')
		   .delay(5000).queue(function(next) {
			$(this).html('Send Message'); next();
		   });
		  }
		});
		next();
	   });
	  }
	 });
	});
	
   
  
	
   
 


	

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  1. Mobile MENU
	/* ----------------------------------------------------------- */

    jQuery(".button-collapse").sideNav();
    
	/* ----------------------------------------------------------- */
	/*  2. Experience SLider(Owl Carousel)
	/* ----------------------------------------------------------- */

	var owl = $("#owl-carousel"); 
    owl.owlCarousel({
        items : 4, //4 items above 1024px browser width
        itemsDesktop : [1024,3], //3 items between 1024px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //1 items between 600 and 0
        itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
    });
    // Slide Navigation
    jQuery(".next").click(function(){
        owl.trigger('owl.next');
    });

    jQuery(".prev").click(function(){
        owl.trigger('owl.prev');
	});
	

	


    /* ----------------------------------------------------------- */
	/*  3. EDUCATION SLIDER (Owl Carousel)
	/* ----------------------------------------------------------- */

	var owl1 = $("#owl-carousel1"); 
	owl1.owlCarousel({
	    items : 4, //4 items above 1024px browser width
	    itemsDesktop : [1024,3], //3 items between 1024px and 901px
	    itemsDesktopSmall : [900,2], // betweem 900px and 601px
	    itemsTablet: [600,1], //1 items between 600 and 0
	    itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
	});
	// Slide Navigation
	jQuery(".next1").click(function(){
	    owl1.trigger('owl.next');
	});

	jQuery(".prev1").click(function(){
	    owl1.trigger('owl.prev');
	});
	
    /* ----------------------------------------------------------- */
	/*  4. PORTFOLIO SLIDER
	/* ----------------------------------------------------------- */

	jQuery('#portfolio-list').mixItUp();	

	/* ----------------------------------------------------------- */
	/*  5. COUNTER
	/* ----------------------------------------------------------- */

	jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });	  

	/* ----------------------------------------------------------- */
	/*  6. TESTIMONIAL SLIDER (Owl Carousel)
	/* ----------------------------------------------------------- */

	var owl2 = $("#owl-carousel2"); 
    owl2.owlCarousel({
        items : 2, //4 items above 1024px browser width
        itemsDesktop : [1024,2], //3 items between 1024px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //1 items between 600 and 0
        itemsMobile : 1 // itemsMobile disabled - inherit from itemsTablet option
    });

    // Slide Navigation
    jQuery(".next2").click(function(){
        owl2.trigger('owl.next');
    });

    jQuery(".prev2").click(function(){
        owl2.trigger('owl.prev');
    });
	 

	/* ----------------------------------------------------------- */
	/*  7. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 
	
	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	// Cache selectors
	var lastId,
	topMenu = $(".menu-scroll"),
	topMenuHeight = topMenu.outerHeight()+13,
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+15;
	  jQuery('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 900);
	  e.preventDefault();
	});

	// Bind to scroll
	jQuery(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }           
	})
    
	/* ----------------------------------------------------------- */
	/*  8. PRELOADER 
	/* ----------------------------------------------------------- */ 

	jQuery(window).load(function() { // makes sure the whole site is loaded
      $('.progress').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })
	  
	/* ----------------------------------------------------------- */
	/* 9. CALL TO ABOUT
	/* ----------------------------------------------------------- */ 
	
	jQuery(".call-to-about").click(function() {
    jQuery('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
	});

	/* ----------------------------------------------------------- */
	/* 10. BOTTOM TO UP
	/* ----------------------------------------------------------- */ 

	jQuery(".up-btn").click(function() {
    jQuery('html,body').animate({
        scrollTop: $("#header").offset().top},
        'slow');
	});

	/* ----------------------------------------------------------- */
	/* 11. PARALLAX HEADER
	/* ----------------------------------------------------------- */ 

	jQuery('.parallax').parallax();

	/* ----------------------------------------------------------- */
	/* 12. HIRE ME SCROLL
	/* ----------------------------------------------------------- */ 

	jQuery(".hire-me-btn").click(function(e) {
		e.preventDefault();
    jQuery('html,body').animate({
        scrollTop: $("#footer").offset().top},
        'slow');
	});

	
});
