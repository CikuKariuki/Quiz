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


           for(i=0; i<=5; 1++){
             if(ques1 == "20"){
               score = marks + 20;
             }
             if(ques2 == "20"){
               score = score+20;
             }
           //   if(ques3 == "20"){
           //     score = score + 20;
           //   }
           //   if(ques4 == "20"){
           //     score = score + 20;
           //   }
           //   if(ques5 == "20"){
           //     score = score + 20;
           //   }
           // } else {
           //   alert("answer all questions")
           // }
       alert(score);
           // document.getElementById("message").innerHTML="You scored" + " " + score +"%".
           });

           $("#submit2").click(function(){
             var marks = 0;
             var score = 0;
             var ques1 = document.forms["quecss"]["cssq1"].value;
             var ques2 = document.forms["quecss"]["cssq2"].value;
             var ques3 = document.forms["quecss"]["cssq3"].value;
             var ques4 = document.forms["quecss"]["cssq4"].value;
             var ques5 = document.forms["quecss"]["cssq5"].value;
