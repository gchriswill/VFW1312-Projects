Ti.UI.setBackgroundColor("#fff");

//Main Window
var mainWindow = Ti.UI.createWindow({
    title: "GchrisWill's Photo Gallery",
    titleAttributes: {
        color: "black",
        font: {
            fontFamily: "monospace", fontSize: 36
        },
        shadow:{color:"black", offset:{width:1,height:1}}
    },
    barColor: "#dedede",
    backgroundImage: "patternImgs/mainPattern.png",
    backgroundRepeat: true
});

//Navigation Controler Window Comtroler
var navWindow = Ti.UI.iOS.createNavigationWindow({
    top: 20,
    window: mainWindow
});

//Main Button view
var firstViewConatiner = Ti.UI.createView({
    width: "336px",
    height: "318px",
    backgroundColor: "black",
    shadowColor: '#aaa',
  shadowOffset: {x:5, y:5},
  shadowRadius: 3,
});

//Image View for my image
var secondViewContainer = Ti.UI.createImageView({
    top: 0,
    width: "336px",
    height: "238px",
    backgroundImage: "MeSignature.png"
});

//Label for Text
var thirdLabelContainer = Ti.UI.createLabel({
    bottom: 0,
    width: "336px",
    height: "80px",
    backgroundColor: "#ccc",
    text: "Click Me To See My Gallery",
    textAlign: "center",
    
    color: "black",
    font: {fontSize: 12, fontFamily: "monospace"},
    
});
var window2 = Titanium.UI.createWindow({
    backgroundColor: "#fff"
});

//External Behaviors File
var secondJSfile = require("appBehavior");

firstViewConatiner.add(thirdLabelContainer);
firstViewConatiner.add(secondViewContainer);
mainWindow.add(firstViewConatiner);
navWindow.open();
