
var imageLogosSource = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "WWDC_logos");
var imageLogosArray = imageLogosSource.getDirectoryListing();

var imageKeysSource = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "WWDC_keys");
var imageKeyArray = imageKeysSource.getDirectoryListing();


mainWindow.addEventListener("click", function(e){
    
    if ( (e.source.prop == "newPage0") || ( e.source.prop == "newPage1" ) || ( e.source.prop == "newPage2" ) ){
        buttonClicked(e);
        newMainWindowCreator( e.source.index );    
    };
    
});

var pageArrayleft = function(passedValue){
    for (var i = 0, j = pageArray.length; i < j; i++){
        pageArray[i].left = passedValue;
    };
};

var pageArrayTop = function(passedValue){
    for (var i = 0, j = pageArray.length; i < j; i++){
        pageArray[i].top = passedValue;
    };
};

var orientationTargetIf = function( value480, valueElse, universalValue){
    
    if ( targetHeight == 480 ){
    
        pageArrayleft(value480);
        
    }else{
            
        pageArrayleft(valueElse);
            
    };
        
    pageArrayTop(universalValue);
        
    mainWindow.layout = "horizontal";
};

var orientationTargetElse = function( value480, valueElse, universalValue){
    
    if ( targetHeight == 480 ){
    
        pageArrayTop(value480);
        
    }else{
            
        pageArrayTop(valueElse);
            
    };
        
    pageArrayleft(universalValue);
        
    mainWindow.layout = "vertical";
};

var orientationDetection = function(target){
    
    if ( target == 3 || target == 4){
        
        orientationTargetIf(44, 66, 55);
        
     }else{
        
        orientationTargetElse(16.5, 38, null);
     
    };
};

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
    var newMainWindow = Ti.UI.createWindow({
        barColor: "#fff",
        url: mainData.extraFilesJS[i],
        imageArrayPassed: imageLogosArray,
        keysArrayPassed: imageKeyArray,
        nav: navWindow
            
    });
    
    navWindow.openWindow(newMainWindow, {
        animate: true
    });
};

Ti.Gesture.addEventListener("orientationchange", function(e){
    orientationDetection(e.orientation);
});



