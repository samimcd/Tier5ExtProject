console.log("This is background")

chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(auto) {
console.log("message", auto)

switch(auto.action) {
    case'startAutoliker' : messagegoes(auto)
    break;

    case 'badges':
        if(auto.badge){
            chrome.browserAction.setBadgeText({ text: auto.badge.text, tabId: auto.badge.tabID });
        }
        break;
}
})

})
     

const messagegoes = (auto) => {
    var am= { 
        action: "Autoliker", 
        fbook: auto.liked 
    }
    chrome.tabs.query({
        active: true,
        currentWindow : true
    }, function(tabs) {
        auto.tabID = tabs[0].id;
        chrome.tabs.sendMessage(tabs[0].id, am , function(data){
            if (chrome.runtime.lastError) {
            } else {
            }
            console.log("facebook", am);
        })
    })
}