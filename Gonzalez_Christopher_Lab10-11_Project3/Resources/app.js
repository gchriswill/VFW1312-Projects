

var targetHeight      = Ti.Platform.displayCaps.platformHeight;
//alert(targetHeight);
var mainData  = {
    
    "extraFilesJS" : [
        "extraJS/firstWin.js", 
        "extraJS/secondWin.js", 
        "extraJS/thirdWin.js"
    ],
    "labelsPack"   : [
        "Gallery", 
        "Info", 
        "Trivia"
    ]
};


var pageArray = [];

var mainWindow = Ti.UI.createWindow({
    title: "Apple's WWDC Hub",
    backgroundColor: "#fff",
    backgroundImage: "appWall4.png",
    backgroundLeftCap: 0,
    backgroundTopCap: 0,
    barColor: "#fff",
    url: null,
    layout:"vertical"
});

mainWindow.orientationModes = [
        Ti.UI.LANDSCAPE_LEFT,
        Ti.UI.LANDSCAPE_RIGHT,
        Ti.UI.PORTRAIT
];

var navWindow = Ti.UI.iOS.createNavigationWindow({
    window: mainWindow
});

for (var i = 0, j = mainData.extraFilesJS.length; i < j; i++){
    var pageViews = Ti.UI.createView({
        backgroundColor: "#fff",
        borderRadius: 50,
        borderColor: "#cecece",
        opacity: 0.8,
        width: 100,
        height: 100,
        prop: "newPage" + i,
        index: i
    });
    
    if (targetHeight == 480){
        pageViews.top = 16.5;
    }else{
        pageViews.top = 38;
    };
    
    var pageViewLabels = Ti.UI.createLabel({
        color: "#000",
        text: mainData.labelsPack[i],
        font: {
            fontSize: 18, 
            fontFamily: "monospace", 
            fontWeight: "bold"
        },
        prop: "newPage" + i,
        index: i
    });
    pageViews.add(pageViewLabels);
    pageArray.push(pageViews);
    mainWindow.add(pageViews);
    
};

var labelViewContainer = Ti.UI.createView({
    backgroundColor: "transparent",
    zIndex: 2,
    
    width: "100%"
});

var labelView = Ti.UI.createView({
    backgroundColor: "#fff",
    opacity: 0.8,
    height: 50,
    width: "100%",
    bottom: 0,
    
        
});

var mainLabel = Ti.UI.createLabel({
    text: "VFW 1213 Christopher Gonzalez",
    textAlign: "center",
    font: {
        fontSize: 14, 
        fontFamily: "monospace", 
        fontWeight: "bold"
    },
    height: 50,
    width: "100%"
});

var appBehavior = require("appbehavior");

labelView.add(mainLabel);
labelViewContainer.add(labelView);
mainWindow.add(labelViewContainer);
navWindow.open();
