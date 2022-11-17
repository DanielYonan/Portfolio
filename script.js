function myFunction() {
    var x = document.getElementsByTagName("img")[0];
    x.getAttributeNode("src").value = "assets/personal-pic.png";
  }  
  
function rollover(myImage)
      {
  
          myImage.src = "assets/personal-pic-color.png";
  
      } 
  
function mouseaway(myImage)
      {
  
          myImage.src = "assets/personal-pic.png";
  
      }  
      