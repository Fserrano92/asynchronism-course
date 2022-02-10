let xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (API) => {
    return new Promise ((resolve, reject) => {
        let xhttp = new xmlHttpRequest();
        xhttp.open("GET", API, true);
        xhttp.onreadystatechange = () => {
          if (xhttp.readyState === 4) {
            xhttp.status === 200
              ? resolve(JSON.parse(xhttp.responseText))
              : reject(new Error("Error " + API));
          }
        };
        xhttp.send();
    })
};


module.exports = fetchData;