
//Global Variables
var stringsContainer = ["Hello World!", "This is my first Titanium App", "Visual Frameworks 1312"];
var stringsButton = ["Previous", "Next"];
var counter1 = 0;
//End of Global Variables


//Main Window
var mainWin = Ti.UI.createWindow({
    backgroundColor: "#ff0000",
    backgroundImage: "MyPattern.png",
    backgroundRepeat: true, 
});

//Menu bar creator
var iOSDefaultMenuBar = Ti.UI.createView({
    backgroundColor: "#ffffff",
    height: 20,
    opacity: 0.5,
    top: 0
});

//Title Bar creator
var titleBar = Ti.UI.createView({
    backgroundColor: "#ffffff",
    height: 30,
    top: 25
});

//Title Label creator 
var titleText = Ti.UI.createLabel({
    text: "Visual Frameworks Lab App",
    textAlign: "center",
    color: "#333",
    font: {fontSize: 14, fontFamily: "Helvetica"},
    top: 5,
    left: 5,
    right: 5,
    bottom: 5
});

//Main Label view to hold stringsContainer indexes
var mainLabel = Ti.UI.createView({
    backgroundColor: "#ffffff",
    height: Titanium.UI.SIZE,
    right: 20,
    left: 20,
});

//Main Label's Text creator
var labelText = Ti.UI.createLabel({
    text: stringsContainer[1],
    textAlign: "center",
    color: "#333",
    font: {fontSize: 14, fontFamily: "Helvetica"},
    height: Titanium.UI.SIZE,
    top: 5,
    left: 5,
    right: 5,
    bottom: 5
});

//Button 1 creator
var button1 = Ti.UI.createView({
    backgroundColor: "#333",
    height: 60,
    width: 90,
    left: 20,
    bottom: 20
});

//Label Text for Button 2
var labelTextButton1 = Ti.UI.createLabel({
    text: stringsButton[0],
    textAlign: "center",
    color: "#ffffff",
    font: {fontSize: 14, fontFamily: "Helvetica"}
});

//Button 2 creator
var button2 = Ti.UI.createView({
    backgroundColor: "#333",
    height: 60,
    width: 90,
    right: 20,
    bottom: 20
});

//Label Text for Button 2
var labelTextButton2 = Ti.UI.createLabel({
    text: stringsButton[1],
    textAlign: "center",
    color: "#ffffff",
    font: {fontSize: 14, fontFamily: "Helvetica"}
});



//Calls
mainWin.add(iOSDefaultMenuBar);
mainWin.add(titleBar);
titleBar.add(titleText);
mainWin.add(mainLabel);
mainLabel.add(labelText);
button2.add(labelTextButton2);
mainWin.add(button2);
button1.add(labelTextButton1);
mainWin.add(button1);
mainWin.open();