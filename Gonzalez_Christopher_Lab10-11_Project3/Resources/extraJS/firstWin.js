var currentWindow = Ti.UI.currentWindow;
var newImageArray = currentWindow.imageArrayPassed;
var colorArray = ["black", "#82D8FF","#C0C0C0" ,"#dedede", "#fff"];
var ramdomizer;
var secureWhile = 0;

currentWindow.orientationModes = [
        Ti.UI.LANDSCAPE_LEFT,
        Ti.UI.LANDSCAPE_RIGHT,
        Ti.UI.PORTRAIT
];

var galleryPage = Ti.UI.createImageView({});

var buttonView = Ti.UI.createView({
    backgroundColor: "#fff",
    borderRadius: 25,
    borderColor: "#cecece",
    opacity: 0.8,
    width: 50,
    height: 50,
    bottom: 10,
    zIndex: 1
    
});

var buttonRamdom = Ti.UI.createLabel({
    color: "#000",
    text: "Ramdom",
    textAlign: "center",
    font: {
            fontSize: 10, 
            fontFamily: "monospace", 
            fontWeight: "bold"
    },
    width: 100,
    height: 50,
    zIndex: 2
});

var ramdonNumber = function(){
    var ramdomizerCreator = Math.floor(Math.random() * newImageArray.length);
    while(ramdomizerCreator == ramdomizer){
        secureWhile++;
        ramdomizerCreator = Math.floor(Math.random() * newImageArray.length);
        
        //Infinite loop secure breaker
        if (secureWhile == 10){
            secureWhile = 0;
            break;
        };
    };
    ramdomizer = ramdomizerCreator;
};

var masterCahnger = function(){
    var counter = 0;
    buttonView.opacity = 0.4;
    var colorBack = setInterval(function(){
        counter++;
        if(counter == 1){
            clearInterval(colorBack);
            buttonView.opacity = 0.8;
        };
    }, 125);
    
    ramdonNumber();
        
    currentWindow.backgroundColor = colorArray[ramdomizer];
    currentWindow.title = newImageArray[ramdomizer];
    galleryPage.image = "../WWDC_logos/" + newImageArray[ramdomizer];
    
};

buttonRamdom.addEventListener("click", masterCahnger);

masterCahnger();
Ti.Gesture.addEventListener("orientationchange", function(e){});


buttonView.add(buttonRamdom);
currentWindow.add(buttonView);
currentWindow.add(galleryPage);

