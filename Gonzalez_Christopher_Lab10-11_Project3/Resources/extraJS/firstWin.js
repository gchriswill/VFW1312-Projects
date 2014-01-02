

var currentWindow  = Ti.UI.currentWindow;
var newImageArray  = currentWindow.imageArrayPassed;
var flipNum        = 179;
var ramdomizer;
var colorArray     = [
    "black", 
    "#82D8FF",
    "#C0C0C0",
    "#dedede", 
    "#fff"
];

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

//Back Button
var backButton = Ti.UI.createView({
    backgroundImage: "../backArrow.png",
    bottom: 10,
    left: 10,
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#cecece",
    opacity: 0.8,
    borderRadius: 25,
    zIndex: 3,
    visible: false
                
});
            
//Next Button
var nextButton = Ti.UI.createView({
    backgroundImage: "../nextArrow.png",
    bottom: 10,
    right: 10,
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#cecece",
    opacity: 0.8,
    borderRadius: 25,
    zIndex: 3,
    visible: false
                
});

var ramdonNumber = function(){
    var secureWhile = 0;
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

var buttonRamdomClick = function(clickedButton){
    var counter = 0;
    clickedButton.opacity = 0.4;
    var colorBack = setInterval(function(){
        counter++;
        if (counter == 1){
            clearInterval(colorBack);
            clickedButton.opacity = 0.8;
        };
    }, 125);
};

var masterCahnger = function(){
    
    buttonRamdomClick(buttonView);
    ramdonNumber();
    currentWindow.backgroundColor = colorArray[ramdomizer];
    currentWindow.title = newImageArray[ramdomizer];
    galleryPage.image = "../WWDC_logos/" + newImageArray[ramdomizer];
    
};

var flipImages = function(){
    
    if (flipNum > 181){
        flipNum = 179;
    };
    //alert(ramdomizer);
    var flipOutAndIn = Ti.UI.create2DMatrix();
        
        flipOutAndIn = flipOutAndIn.scale(0, 0);
        flipOutAndIn = flipOutAndIn.rotate(flipNum);
        var flipOutAndInAnimation = Ti.UI.createAnimation({
            
            transform : flipOutAndIn,
            duration : 500,
            autoreverse : true,
            repeat : 1
        });
        
        galleryPage.animate(flipOutAndInAnimation);
        var num = 0;
        var timerForNewImage = setInterval(function(){
            
            if (num == 1){
                galleryPage.image = "../WWDC_logos/" + newImageArray[ramdomizer];
                currentWindow.backgroundColor = colorArray[ramdomizer];
                currentWindow.title = newImageArray[ramdomizer];
                clearInterval(timerForNewImage);
            };
            num++;
        }, 250);
    flipNum += 2;
};

var orientationFunction = function(target){
    if ( target == 3 || target == 4){
        backButton.visible = true;
        nextButton.visible = true;
        buttonView.visible = false; 
        
    }else{
         backButton.visible = false;
         nextButton.visible = false;
         buttonView.visible = true;
    };
    
};

buttonRamdom.addEventListener("click", function(){
    
    buttonRamdomClick(buttonView);
    ramdonNumber();
    flipImages();
});

nextButton.addEventListener("click", function(){
    flipNum = 179;
    ramdomizer++;
    if (ramdomizer > newImageArray.length - 1){
        ramdomizer = 0;
        //alert(ramdomizer);
    };
            
    buttonRamdomClick(nextButton);
    flipImages();
});
            
backButton.addEventListener("click", function(){
    flipNum = 181;
    ramdomizer--;
    if (ramdomizer < 0){
        ramdomizer = newImageArray.length - 1;
        //alert(ramdomizer);
    };
            
    buttonRamdomClick(backButton);
    flipImages();
});

Ti.Gesture.addEventListener("orientationchange", function(e){
    orientationFunction(e.orientation);
});

orientationFunction(Ti.UI.orientation);
masterCahnger();

buttonView.add(buttonRamdom);
currentWindow.add(backButton, nextButton);
currentWindow.add(buttonView);
currentWindow.add(galleryPage);

