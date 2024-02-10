<html>
  <head></head>
  <body id="body" style="background-color:powderblue;">
    <h1 style="color:black;">This is a black header.</h1>
    <p style="color:black;">This text is black. The same color as the text in the header. Below, an image can be found of the colour black.</p>
    <a href="https://en.wikipedia.org/wiki/Black"><img src="/black.jpg" width="100" height="100"></a>
    <p></p>
    <p id="toWhite" style="color:black">Click here to get to know more about the color white.</p>
    <h1 style="color:white;">This is a white header.</h1>
    <p style="color:white;">This text is white. The same color as the text in the header.</p>
    <a href="https://en.wikipedia.org/wiki/White"><img src="/white.jpg" width="100" height="100"></a>
    <p></p>
    <button type="button" style="color:black" onClick="toWhite()">Click here to get to know more about the color black.</button>
    <style type="text/css">
      p { font-family: Arial; }
    </style>
    <script>
      var textButtonToWhite = document.getElementById('toWhite');
      textButtonToWhite.addEventListener('click', toWhite(), false);
      
      function toBlack() {
        document.getElementById("body").style.backgroundColor = "black";
      }
  
      function toWhite() {
        document.getElementById("body").style.backgroundColor = "white";
      }
    </script>
  </body>
</html>
