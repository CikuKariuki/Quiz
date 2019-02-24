<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/quiz.css">
    <script   src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/quiz.js"></script>
    <title>Quiz boards</title>
  </head>
  <body>
    <div class="container">
    <div class="jumbotron">
      <h1>QUIZ</h1>
      <h2>Test your understanding</h2>
    </div>
    <div class="row">
      <div class="col-md-4">
        <button class="topbutton" id="hq" type="button" name="button">HTML</button>
      </div>
      <div class="col-md-4">
        <button class="topbutton" id="cq" type="button" name="button">CSS</button>
      </div>
      <div class="col-md-4">
        <button class="topbutton" id="jq"type="button" name="button">JAVASCRIPT</button>
      </div>
      </div>
      <div class="well">
          <form id="quehtml" name="quehtml"class="htmlquiz" >
            <p><b>1. What HTML tag creates a bulleted list?</b></p>
              <input type="radio" name="htmlq1" value="0">ol <br>
              <input type="radio" name="htmlq1" value="0">bl <br>
              <input type="radio" name="htmlq1" value="0">br<br>
              <input type="radio" name="htmlq1" value="20">ul <br>
            <p><b>2. Which attribute tells the browser where to go when a hyperlink is clicked?</b></p>
              <input type="radio" name="htmlq2" value="0">src <br>
              <input type="radio" name="htmlq2" value="0">url <br>
              <input type="radio" name="htmlq2" value="0">link <br>
              <input type="radio" name="htmlq2" value="20">href <br>
            <p><b>3. What does HTML stand for?</b></p><br>
              <input type="radio" name="htmlq3" value="0">Hyper-Phrase Marketing Language <br>
              <input type="radio" name="htmlq3" value="0">Home Tool Markup Language <br>
              <input type="radio" name="htmlq3" value="20">Hyper Text Markup Language <br>
              <input type="radio" name="htmlq3" value="0">Hyperlinks and Text Markup Language <br>
            <p><b>4. Which of the following is not a supported type for the input tag?</b></p>
              <input type="radio" name="htmlq4" value="0">submit <br>
              <input type="radio" name="htmlq4" value="0">tel <br>
              <input type="radio" name="htmlq4"value="20">planet <br>
              <input type="radio" name="htmlq4" value="0">url <br>
            <p><b>5. Where is the metadata located in an HTML document?</b></p>
              <input type="radio" name="htmlq5" value="0">body <br>
              <input type="radio" name="htmlq5"value="20">head <br>
              <input type="radio" name="htmlq5" value="0">paragraph <br>
              <input type="radio" name="htmlq5" value="0">link <br>
            <button  id="submit1" type="submit" name="button" >Submit</button>
          </form>
      </div>

      <div id="result">
        <p id="message"></p>
      </div>


      <div class="panel-default">
      <div class="well">

      <form id="quecss" class="cssquiz">
        <p><b>1. What are stylesheets used for?</b></p>
          <input type="radio" name="cssq1" value="0">to define the structure of web documents <br>
          <input type="radio" name="cssq1" value="0">to script web pages <br>
          <input type="radio" name="cssq1" value="20">to control the look and feel of web documents <br>
          <input type="radio" name="cssq1" value="0">to store the keywords of web pages <br>
        <p><b>2. Select the attribute that organizes the inline styling:</b></p><br>
          <input type="radio" name="cssq2" value="20">style <br>
          <input type="radio" name="cssq2" value="0">id <br>
          <input type="radio" name="cssq2" value="0">class <br>
          <input type="radio" name="cssq2" value="0">strong <br>
        <p><b>3. What is the "style", when creating an internal CSS?</b></p><br>
          <input type="radio" name="cssq3" value="0">value <br>
          <input type="radio" name="cssq3" value="20">tag <br>
          <input type="radio" name="cssq3" value="0">property <br>
        <p><b>4. What value is NOT used with the font-style property?</b></p><br>
          <input type="radio" name="cssq4" value="0">italic <br>
          <input type="radio" name="cssq4" value="0">normal <br>
          <input type="radio" name="cssq4" value="0">oblique <br>
          <input type="radio" name="cssq4" value="20">slant <br>
        <p><b>5. Which of the following is NOT applicable for the text-align property?</b></p>
          <input type="radio" name="cssq5" value="0">left <br>
          <input type="radio" name="cssq5" value="0">center <br>
          <input type="radio" name="cssq5" value="20">even <br>
          <input type="radio" name="cssq5" value="0">right <br>
        <button id="submit2" type="submit" name="button">Submit</button>
        </form>
      </div>
      </div>

      <div class="well" >
        <form id="quejs" class="jsquiz">
          <p><b>1. Select the correct statement:</b></p>
            <input type="radio" name="jsq1" value="0">Javascript is a server-side only language <br>
            <input type="radio" name="jsq1" value="20">You can use Javascript to create interactive web elements <br>
            <input type="radio" name="jsq1" value="0">Javascript is used only for web apps  <br>
        <p><b>2. What tag contains the Javascript code?</b></p>
          <input type="radio" name="jsq2" value="0">body <br>
          <input type="radio" name="jsq2" value="0">code <br>
          <input type="radio" name="jsq2" value="0">style <br>
          <input type="radio" name="jsq2" value="20">script <br>
        <p><b>3. How does a comment look like on Javascript?</b></p>
          <input type="radio" name="jsq3" value="20"> // this is a comment <br>
          <input type="radio" name="jsq3" value="0"> %% this is a comment <br>
          <input type="radio" name="jsq3" value="0"> >!-this is a comment-< <br>
          <input type="radio" name="jsq3" value="0">** this is a comment <br>
        <p><b>4. Which key word is used to tell Javascript that we're going to work with a variable?</b></p>
          <input type="radio" name="jsq4" value="0">int <br>
          <input type="radio" name="jsq4" value="0">vrb <br>
          <input type="radio" name="jsq4" value="0">variable <br>
          <input type="radio" name="jsq4" value="20">var
           <br>
        <p><b>5. What is the "=" (equal sign) called in Javascript?</b></p>
          <input type="radio" name="jsq5" value="0">equal to <br>
          <input type="radio" name="jsq5" value="0">is equivalent <br>
          <input type="radio" name="jsq5" value="20">assignment operator <br>
        <button id="submit3" type="submit" name="button" >Submit</button>
      </form>
    </div>

    </div>

  </body>
</html>
