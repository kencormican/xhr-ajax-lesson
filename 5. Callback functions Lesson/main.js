function getData(cb) {                                          // getData function defines with cb passed in as argument
  var xhr = new XMLHttpRequest();                               // New javaScript xhr object instance that faciliates consumption of APIs
  //var data;                                                   // data variable replaced by testData passed in from printData function
                                                                // passed in as argument from printData function

  xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");       // open connection with URL we want to retrieve from server
  xhr.send();                                                   // send request

  xhr.onreadystatechange = function () {                        // Event Listener checking for change in internal state of xhr object

    if (this.readyState == 4 && this.status == 200) {           // If opereation is complete (4) and has succeeded (200) do the following
      cb(JSON.parse(this.responseText));                        // JSON parsed responseText passed into cb function as argument
    }
  };
}

function printData(testData) {                                  // printData function defined with testData passed in as argument                                  
  console.log(testData);
}

getData(printData);                                             // Call getData function passing printData() in as argument

