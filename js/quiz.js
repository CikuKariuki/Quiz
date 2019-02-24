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
       var marks = 0;
       var score = 0;
       var ques1 = document.forms["quehtml"]["htmlq1"].value;
       var ques2 = document.forms["quehtml"]["htmlq2"].value;
       var ques3 = document.forms["quehtml"]["htmlq3"].value;
       var ques4 = document.forms["quehtml"]["htmlq4"].value;
       var ques5 = document.forms["quehtml"]["htmlq5"].value;

       
