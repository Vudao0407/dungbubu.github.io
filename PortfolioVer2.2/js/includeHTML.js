function includeHTML() {
  var z, i, elmnt, file, xhttp;
  // Loop through a collection of all HTML elements
  z = document.getElementsByTagName("*");

  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    // Search for elements with certains atrribute
    file = elmnt.getAttribute("w3-include-html");
    
    if (file) {
      // Make an HTTP request using the atrribute value as the file name
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          // Remove the atrribute, and call this function once more
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      // Exit the function
      return;
    }
  }
}