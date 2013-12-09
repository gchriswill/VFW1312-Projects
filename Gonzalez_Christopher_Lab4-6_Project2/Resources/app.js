
//Main Window Creatior
var mainWin = Ti.UI.createWindow({
    title: "Family List"
});

//Navigation Controler Window Creatior
var navWin = Ti.UI.iOS.createNavigationWindow({
    window: mainWin
});

//Menu Bar creatior
var menuBar = Ti.UI.createView({
    top: 0,
    height: 20,
    backgroundColor: "#fff",
    opacity: 0.6
});
var secondJSfile = require("appBehavior");

navWin.add(menuBar);
navWin.open();
