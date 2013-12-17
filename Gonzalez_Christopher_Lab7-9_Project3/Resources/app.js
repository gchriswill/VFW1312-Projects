var platformWidth = Ti.Platform.displayCaps.platformWidth;
var platformHeight = Ti.Platform.displayCaps.platformHeight;

//alert(platformWidth + " " + platformHeight);
Ti.UI.setBackgroundColor("#fff");

//Main Window
var mainWindow = Ti.UI.createWindow({
    title: "GchrisWill's Photo Gallery",
    titleAttributes: {
        color: "black",
        font: {
            fontFamily: "monospace", 
            fontSize: 36
        },
        shadow: {
            color: "black", 
            offset: {
                width: 1,
                height: 1
                }
        }
    },
    barColor: "#dedede",
    backgroundImage: "patternImgs/mainPattern.png",
    backgroundRepeat: true,
    orientationModes: [
        Ti.UI.LANDSCAPE_LEFT,
        Ti.UI.LANDSCAPE_RIGHT,
        Ti.UI.UPSIDE_PORTRAIT,
        Ti.UI.PORTRAIT
    ]
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
    borderRadius: 10
    
});

//Image View for my image
var secondViewContainer = Ti.UI.createImageView({
    image: "MeSignature.png",
    top: 0,
    width: "336px",
    height: "238px"
    
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
    font: {
        fontSize: 12, 
        fontFamily: "monospace"
    },
    shadowColor: "#fefefe",
    shadowOffset: {
        x:1.5, 
        y:1.5
    },
    shadowRadius: 3
    
});

var loadingView = Ti.UI.createView({
    top: 0,
    width: "336px",
    height: "238px",
    backgroundColor: "#ccc"
});

var loadingImage = Ti.UI.createImageView({
    image: "Loading48.png",
    width: "48px",
    height: "48px",
});


//External Behaviors File
var secondJSfile = require("appBehavior");

loadingView.add(loadingImage);
firstViewConatiner.add(thirdLabelContainer);
firstViewConatiner.add(secondViewContainer);
mainWindow.add(firstViewConatiner);

navWindow.open();

