//= require googleanalytics
//= require webfontloader
//= require mousewheel
//= require sticky
$(function() {

   $("body").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);
    
      event.preventDefault();

   });

});
$(document).ready(function(){
    $(".videonavbar").sticky({topSpacing:0});
  });
