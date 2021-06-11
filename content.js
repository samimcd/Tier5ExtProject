console.log("Facebook Extension");

 var fbport = chrome.runtime.connect ({
    name: "ContentScript"
}) 


chrome.runtime.onMessage.addListener (function(am){
    console.log("data", am);
    switch(am.action) {
        case "Autoliker" : Startlike(am.fbook)
        break;
    }
    return true;
} ) 


var l = 0;

const Startlike = (am ,c=0) => {
    var F = document.querySelector ('div[aria-label="Actions for this post"]');
    console.log("Find the three dots");
    F.className = "j83agx80 cbu4d94t"; 
    if (F.className == "j83agx80 cbu4d94t") { 
         console.log("Reached to the like options");
         const T = am.time;
         var tInterval=setTimeout(() => {
         var lbtn = document.querySelector ('div[aria-label="Like"]');
         lbtn.click()
         console.log("Post Liked");
         l++;
         console.log("Find the next post");

         notifyUser(am,l);
         Startlike(am,c++)
         }, T*1000 ); 
    }
    
    else {
        return false;
    }
} 





const notifyUser = (auto,c = 0) => {
    const sentCount = c;
   
 
      auto = {
        action: "badges",
        badge: {
          tabID: auto.tabID,
          text: sentCount.toString(),
        }
      };
  
    fbport.postMessage(auto);
  };