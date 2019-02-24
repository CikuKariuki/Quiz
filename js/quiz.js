$(document).ready(function() {
  $("#hq").click(function(){
    $("#quecss").hide();
    $("#quejs").hide();
    $("#quehtml").slideToggle();
  });
  $("#cq").click(function(){
    $("#quehtml").hide()
    $("#quejs").hide()
    $("#quecss").slideToggle()
  });
