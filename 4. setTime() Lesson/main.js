var xhr = new XMLHttpRequest();				                    // New javaScript xhr object instance that faciliates consumption of APIs
var data;						                                // initialise data variable

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");		    // open connection with URL we want to retrieve from server
xhr.send();					                                    // send request

xhr.onreadystatechange = function () {			                 // Event Listener checking for change in internal state of xhr object	
    console.log(this.readyState);                                // Logs xhr operation state everytime it changes

  if (this.readyState == 4 && this.status == 200) {			     // If opereation is complete (4) and has succeeded (200) do the following
    data = JSON.parse(this.responseText);                        // stores responseText into in data variable    				                    
  }  
};
setTimeout(function(){
    // log to console outside xhr functions using setTim() function with 500ms delay
    console.log(`This uses setTime() from outside xhr function: `,(data))
}, 500);                                    




