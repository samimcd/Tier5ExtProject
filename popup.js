var FBport = chrome.extension.connect(
    {
        name: "popup-Background"
    }
)

    const  FE = document.querySelector("#fext");
    const  Start_btn = document.querySelector("#start");
    const  Stop_btn = document.querySelector("#stop");
    Start_btn.addEventListener("click" , function() 
    {
        var t=document.querySelector("#fb").value;
        console.log("t", t);
       
        chrome.tabs.query
        (
            {
                active: true,
                currentWindow: true
            },
            function(tabs) 
            {
                var auto= {
                    action: "startAutoliker",
                    liked : {
                        time: t,
                        tabID: tabs[0].id
                    }
                };
                sendRequest(auto);
            }
        )        
    });
   // Stop_btn.addEventListener("click" , function() 
   // {
     //  var t=document.querySelector("#fb").value;
      //  console.log("t", t);

        //chrome.tabs.query
       // (
         //   {
         //       active: false,
          //      currentWindow: false
          //  },
          //  function(tabs) 
          //  {
             //   var auto= {
                //    action: "stopAutoliker",
                  //  liked : {
                   //     time: t,
                      //  tabID: tabs[auto].id
                   // }
              //  };
               // sendRequest(auto);
          //  }
    //    ) 

   // });





const sendRequest = (data) => {
    try {
        FBport.postMessage(data);
    }
    catch(ext) {
        alert("please reload ");
    }
}