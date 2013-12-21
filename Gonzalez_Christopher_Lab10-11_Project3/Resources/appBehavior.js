
var imageLogosSource = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "WWDC_logos");
var imageLogosArray = imageLogosSource.getDirectoryListing();

var imageKeysSource = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "WWDC_keys");
var imageKeyArray = imageKeysSource.getDirectoryListing();

mainWindow.addEventListener("click", function(e){
    
    if (e.source.prop == "newPage0" ){
        buttonClicked(e);
        newMainWindowCreator( e.source.index );    
    }else if (e.source.prop == "newPage1" ){
        buttonClicked(e);
        newMainWindowCreator( e.source.index ); 
    }else if (e.source.prop == "newPage2" ){
        buttonClicked(e);
        newMainWindowCreator( e.source.index ); 
    };
    
});

function buttonClicked(e){
    var counter = 0;
    pageArray[e.source.index].opacity = 0.4;
    
    var colorBack = setInterval(function(){
        counter++;
        if(counter == 1){
            clearInterval(colorBack);
            pageArray[e.source.index].opacity = 0.8;
        };
    }, 250);
};


function newMainWindowCreator(i){
    newMainWindow = Ti.UI.createWindow({
    barColor: "#fff",
    url: mainData.extraFilesJS[i],
    imageArrayPassed: imageLogosArray,
    keysArrayPassed: imageKeyArray,
    nav: navWindow
            
    });
    navWindow.openWindow(newMainWindow, {animate: true});
    
};

