var mainData = {
    
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
    backgroundImage: "appWall3.png",
    backgroundLeftCap: "100%",
    backgroundTopCap: "100%",
    barColor: "#fff",
    url: null,
    layout:"vertical"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
    window: mainWindow
});

for (var i = 0, j = mainData.extraFilesJS.length; i < j; i++){
    var pageViews = Ti.UI.createView({
        backgroundColor: "#fff",
        borderRadius: 45,
        borderColor: "#cecece",
        opacity: 0.8,
        width: "30%",
        height: 90,
        top: 10,
        prop: "newPage" + i,
        index: i
    });
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
});

var labelView = Ti.UI.createView({
    backgroundColor: "#fff",
    opacity: 0.8,
    height: 50,
    bottom: 0
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
});

var appBehavior = require("appbehavior");

labelView.add(mainLabel);
labelViewContainer.add(labelView);
mainWindow.add(labelViewContainer);
navWindow.open();
