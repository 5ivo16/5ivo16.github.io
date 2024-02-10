<html>
  <head>
    <link rel="stylesheet" href="/style.css">
  </head>
  <body id="body" style="background-color:powderblue;">
    <h1 style="color:black;">This is a black header.</h1>
    <p style="color:black;">This text is black. The same color as the text in the header. Below, an image can be found of the colour black. Click on it to deep dive into the colour white.</p>
    <a href="https://en.wikipedia.org/wiki/Black"><img src="/black.jpg" width="100" height="100"></a>
    <p></p>
    <p id="toBlack" style="color:black" onClick="toBlack()">Click on this text to get to know more about the color white.</p>
    <h1 style="color:white;">This is a white header.</h1>
    <p style="color:white;">This text is white. The same color as the text in the header. Below, an image can be found of the colour white. Click on it to deep dive into the colour white.</p>
    <a href="https://en.wikipedia.org/wiki/White"><img src="/white.jpg" width="100" height="100"></a>
    <p></p>
    <p id="toWhite" style="color:white" onClick="toWhite()">Click on this text to get to know more about the color black.</p>
    <script>     
      function toBlack() {
        document.body.style.backgroundColor = "black";
      }
  
      function toWhite() {
        document.body.style.backgroundColor = "white";
      }
    </script>
  </body>
</html>
