// @author Stas Firer : SF QA ENG


// initialize global variables
var rawSeed;
var questionNumber = 0;
var test;
var domInfo;
var takeId;

function DOMtoString(doc) {

	var src = doc.getElementsByTagName("iframe")[0].src;  // get the location of the frame that redirects to CXP


  // Get the take ID
  takeId = src.search("id");
  takeId = src.substring(takeId + 3, takeId + 18);
  
  var req = new XMLHttpRequest();    // create new AJAX request

  req.open("GET", src + "&status=1", false);   // send GET request
  
  req.onreadystatechange = function() {    // verify state has been loaded
    if (req.readyState == 4) {
      if (req.status == 200) { 
      rawSeed = req.responseText;
    
        }
      }
    };

   req.send();    //finish AJAX call
///////////////////////////////////////////////////////////

var rawSeedJson = JSON.parse(rawSeed);



for (child in rawSeedJson.children) {

  if (typeof rawSeedJson.children[child].currentItem != "undefined") {
    break;
  } 
  questionNumber++;  
  

 };

/////////////////////////////////////////////////////////

  
   test = (JSON.parse(rawSeed).children[questionNumber]);
   test = JSON.stringify(test);
   var nameStr = (JSON.parse(test).name);
   var seedStr = (JSON.parse(test).seed);
   var uriStr = (JSON.parse(test).uri); 
   seed = "Name:  " + nameStr + '\n' + "Seed:  " + seedStr + '\n' + "Uri: " + uriStr + "\n" + "TakeID: " + takeId;

return seed;  // return complete list of seeds to chrome extension6

};



chrome.extension.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});

