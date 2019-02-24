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
    alert("sasa")
    });
  $("#submit2").click(function(){
    alert("poa")
  });

  $("#submit3").click(function(){
    alert("poa sana")
  });

  event.preventDefault();
});
