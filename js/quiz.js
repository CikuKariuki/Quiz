// UI logic
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
//Business logic

       var marks = 0;
       var score = 0;
       var ques1 = document.forms["quehtml"]["htmlq1"].value;
       var ques2 = document.forms["quehtml"]["htmlq2"].value;
       var ques3 = document.forms["quehtml"]["htmlq3"].value;
       var ques4 = document.forms["quehtml"]["htmlq4"].value;
       var ques5 = document.forms["quehtml"]["htmlq5"].value;


            if(ques1 == "20"){
               score = marks + 20;
             }
             if(ques2 == "20"){
               score = score+20;
             }
             if(ques3 == "20"){
               score = score + 20;
             }
             if(ques4 == "20"){
               score = score + 20;
             }
             if(ques5 == "20"){
               score = score + 20;
             }

//UI logic
          event.preventDefault();
         document.getElementById("message").innerHTML="You scored" + " " + score +"%";
         });

     });
// Business logic
          $(document).ready(function() {
           $("#submit2").click(function(){



             var marks = 0;
             var score = 0;
             var ques12 = document.forms["quecss"]["cssq1"].value;
             var ques22 = document.forms["quecss"]["cssq2"].value;
             var ques32 = document.forms["quecss"]["cssq3"].value;
             var ques42 = document.forms["quecss"]["cssq4"].value;
             var ques52 = document.forms["quecss"]["cssq5"].value;

              if(ques12 == "20"){
                 score = marks+20;
               }
               if(ques22 == "20"){
                 score = score+20;
               }
               if(ques32 == "20"){
                 score = score + 20;
               }
               if(ques42 == "20"){
                 score = score + 20;
               }
               if(ques52 == "20"){
                 score = score + 20;
               }

//UI logic
               event.preventDefault();
              document.getElementById("results").innerHTML="You scored" + " " + score +"%";
      });
           });
//Business logic
        $(document).ready(function() {
        $("#submit3").click(function(){
          var marks = 0;
          var score = 0;
          var ques1 = document.forms["quejs"]["jsq1"].value;
          var ques2 = document.forms["quejs"]["jsq2"].value;
          var ques3 = document.forms["quejs"]["jsq3"].value;
          var ques4 = document.forms["quejs"]["jsq4"].value;
          var ques5 = document.forms["quejs"]["jsq5"].value;


            if(ques1 == "20"){
              score = marks + 20;
            }
            if(ques2 == "20"){
              score = score+20;
            }
            if(ques3 == "20"){
              score = score + 20;
            }
            if(ques4 == "20"){
              score = score + 20;
            }
            if(ques5 == "20"){
              score = score + 20;
            }
//UI logic
            event.preventDefault();
           document.getElementById("ans").innerHTML="You scored" + " " + score +"%";

      });

 });
