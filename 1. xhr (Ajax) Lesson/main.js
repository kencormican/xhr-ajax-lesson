var xhr = new XMLHttpRequest();				                        // New javaScript xhr object instance that faciliates consumption of APIs

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");		        // open connection with URL we want to retrieve from server
xhr.send();					                                        // send request


xhr.onreadystatechange = function () {			                    // Event Listener checking for change in internal state of xhr object	
  if (this.readyState == 4 && this.status == 200) {			        // If opereation is complete (4) and has succeeded (200) do the following
    document.getElementById("data").innerHTML = this.responseText;	// modify innerHTML of element with "data" id to responseText
  }
};



