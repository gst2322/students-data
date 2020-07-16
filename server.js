var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("GET", "https://https://api.jsonbin.io/b/5f0fe3c3c1edc4661757f0e3", true);
req.setRequestHeader("secret-key", "$2b$10$jQloilZwYk3.yJzA/kWiIOh9ZNhN78yUNFuABBgRfbloeYHZFsANu");
req.send();
// console.log(res)