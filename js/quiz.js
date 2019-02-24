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
  $("#jq").click(function(){
    $("#quecss").hide()
    $("#quehtml").hide()
    $("#quejs").slideToggle()

  });
 });


 $(document).ready(function() {
     $("#submit1").click(function(){
