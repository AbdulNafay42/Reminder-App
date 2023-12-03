if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => {
            console.log("service worker registered")
        Notification.requestPermission().then(res =>{
            if(Notification.permission == 'granted'){
                console.log("Granted Permission")
                return
            }
            console.log(res);
            
        })
        
        })
        .catch(err => console.log("service worker not registered", err))
    })
  }