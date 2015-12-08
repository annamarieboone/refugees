$(document).ready(function(){

var $window = $(window); //You forgot this line in the above example

$('section[data-type="background"]').each(function(){
var $bgobj = $(this); // assigning the object
$(window).scroll(function() {
var yPos = -( ($window.scrollTop() + 400) / $bgobj.data('speed'));
// Put together our final background position
var coords = '50% '+ yPos + 'px';
// Move the background
//$bgobj.css({ backgroundPosition: coords });
});
});
});

// Create HTML5 elements for IE
          
                    document.createElement("article");
                    document.createElement("section");

$(function(){

    $(window).scroll(function(e) {

        var scrollAmount = $('body').scrollTop();   
        console.log(scrollAmount);


    if(scrollAmount >="theamountyouwant" && scrollAmount <= "theotheramountyouwant") {


        $("#videoHolder").html(
            '<video width="1200" height="700" autoplay>' +

         '<source src="http://itp.nyu.edu/~rnr217/HTML5/Week3/video/testopen.webm" type="video/webm"></source>'  +
        '<source src="http://itp.nyu.edu/~rnr217/HTML5/Week3/video/testopen.mp4" type="video/mp4"></source>' +

         '</video>');