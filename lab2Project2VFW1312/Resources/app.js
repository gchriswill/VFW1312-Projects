Titanium.UI.setBackgroundColor('#000');

var mainWin = Ti.UI.createWindow({
    title: "My first window",
    backgroundColor: "#ff0000",
    backgroundImage: "MyPattern.jpg",
    backgroundRepeat: true, 
});

var iOSDefaultMenuBar = Ti.UI.createView({
    backgroundColor: "#ffffff",
    height: 20,
    opacity: 0.75,
    top: 0
});

mainWin.add(iOSDefaultMenuBar);
mainWin.open();