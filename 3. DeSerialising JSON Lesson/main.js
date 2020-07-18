var xhr = new XMLHttpRequest();				                    // New javaScript xhr object instance that faciliates consumption of APIs
var data;						                                // initialise data variable

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");		    // open connection with URL we want to retrieve from server
xhr.send();					                                    // send request

function setData (jsonData) {                                   // This Function deserialises the JSON from the xhr function
    data =   jsonData;
    console.log("This is from data inside setData(): ",(data)); // log to console the data variable moved inside setData function	
    console.log("This is from jsonData argument: ",(jsonData)); // log to console the jsonData paremeter collected from inside xhr function	
}

xhr.onreadystatechange = function () {			                 // Event Listener checking for change in internal state of xhr object	

  if (this.readyState == 4 && this.status == 200) {			     // If opereation is complete (4) and has succeeded (200) do the following
    setData(JSON.parse(this.responseText));                      // parse/pass responseText into setData function as argument    				                    
  }  
};

console.log("This is from outside function: ",(data));          // log to console the jsonData paremeter collected from inside xhr function



