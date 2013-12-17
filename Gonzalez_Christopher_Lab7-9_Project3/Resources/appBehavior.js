


//Master Event Listener 
firstViewConatiner.addEventListener("click", function(){
    
    firstViewConatiner.add(loadingView);
    
    //counter and speed for animation
    var count = 0;
    var speeder = 15;
    
    //loading animation timer
    var timer = setInterval(function(){
        
        count+=2.8125;
        var matrix = Ti.UI.create2DMatrix();
        matrix = matrix.rotate(count);
        
        //loading animation class
        var a = Ti.UI.createAnimation({
            transform : matrix,
            duration : speeder,
            autoreverse : false,
            repeat : 0
        });
        
        //loading animation function
        loadingImage.animate(a);
        if (count == 360) {
            masterFunction();
            clearInterval(timer);
            firstViewConatiner.remove(loadingView);
        };
    }, speeder);
});   

//Master Function
function masterFunction() {
    
    //Semi-Global Variables
    //variable that holds the path of the images location
    var myGallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "imgSrc");
    
    //variable that extract the images and holds them into an array
    var myGalleryImagesCount = myGallery.getDirectoryListing();
    
    //Variable that holds the width of the device display
    var calculationPlatformWidth = Ti.Platform.displayCaps.platformWidth;
    
    //Variable that holds the Image Views margin
    var imagesMargin = 10;
    
    //Variable that holds the images per row count, on the second main window
    var imagesPerRow = 4;
    
    //Variable that holds the total value of the space to distribute
    var imagesTotalSpace = imagesMargin * (imagesPerRow + 1);
   
    //Variable that holds the array of the views of the second main window
    var imagesHolderArray = [];
    
    //variable that holds the curent length of the image's array making the array function in dinamic mode
    var lengthCounter = myGalleryImagesCount.length - 1;
    
    //variable that holds the animation module style used by the back button 
    var backAnimationStyle = Ti.UI.iPhone.AnimationStyle.CURL_DOWN;
    
    //variable that holds the animation module style used by the next button
    var nextAnimationStyle = Ti.UI.iPhone.AnimationStyle.CURL_UP;
    //End of global variables
    

    //Second Main Window
    var secondMainWindow = Ti.UI.createWindow({
        title: "Gallery's Thumbnails",
        backgroundImage: "patternImgs/mainPattern.png",
        backgroundRepeat: true,
        barColor: "#dedede",
        orientationModes: [
            Ti.UI.LANDSCAPE_LEFT,
            Ti.UI.LANDSCAPE_RIGHT,
            Ti.UI.UPSIDE_PORTRAIT,
            Ti.UI.PORTRAIT
        ]
    });
    
    //Scroll View Window Controler
    var scrollViewContainer = Ti.UI.createScrollView({
        layout: "horizontal",
        contentWidth: "100%",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        height: "100%",
        width: "100%",
        horizontalWrap: true,
    });
    
    //main "for" loop that runs the throught the images array
    for (var i = 0, j = myGalleryImagesCount.length; i < j; i++){
        
        //Scroll View Window Controler's Images containers
        var myImagesContainers = Ti.UI.createView({
            backgroundImage: "imgSrc/" + myGalleryImagesCount[i],
            borderColor: "#dedede",
            width: (calculationPlatformWidth / imagesPerRow) - (imagesTotalSpace / imagesPerRow),
            height: 70,
            top: 10,
            left: 10,
            verificator: true,
            title: myGalleryImagesCount[i],
            index: i
        });
        
        //Pusing the views to the array variable
        imagesHolderArray.push(myImagesContainers);

        //Adding Images containers to the Scrollview controller view
        scrollViewContainer.add(myImagesContainers);
        
    };//End of for loop

   //Event listener propagation technique targeting the Images containers source
    scrollViewContainer.addEventListener("click", function(e){            
        
        //Conditional that check if the Images containers had been clicked
        if (e.source.verificator == true){
                
            //Third Main Window
            var thirdMainWindow = Ti.UI.createWindow({
                title: e.source.title,
                backgroundImage: "patternImgs/mainPattern.png",
                backgroundRepeat: true,
                barColor: "#dedede",
                orientationModes: [
                    Ti.UI.LANDSCAPE_LEFT,
                    Ti.UI.LANDSCAPE_RIGHT,
                    Ti.UI.UPSIDE_PORTRAIT,
                    Ti.UI.PORTRAIT
                ]
            });
                    
            //Third Main Window's Image Container
            var secondMyImagesContainers = Ti.UI.createView({
                backgroundImage: e.source.backgroundImage,
                width: 304,
                height: 202,
                index: e.source.index
            });
            
            
            //Back Button
            var backButton = Ti.UI.createView({
                backgroundImage: "backArrow.png",
                bottom: 20,
                left: 20,
                width: 48,
                height: 48,
                backgroundColor: "#ccc",
                opacity: 0.2,
                borderRadius: 10,
                index: e.source.index
            });
            
            //Next Button
            var nextButton = Ti.UI.createView({
                backgroundImage: "nextArrow.png",
                bottom: 20,
                right: 20,
                width: 48,
                height: 48,
                backgroundColor: "#ccc",
                opacity: 0.2,
                borderRadius: 10,
                index: e.source.index
            });
          
            //Adding the Image Container and buttons to the Third Main Window
            thirdMainWindow.add(nextButton);
            thirdMainWindow.add(backButton);
            thirdMainWindow.add(secondMyImagesContainers);
                    
            //Navigation controller that opens the Third Main Window
            navWindow.openWindow(thirdMainWindow, {
                animate: true
            });
            
            //varialble that holds the current image's array index being use by the for loop and will be used by the back button
            var backCounter = backButton.index;
    
            //varialble that holds the current image's array index being use by the for loop and will be used by the next button
            var nextCounter = nextButton.index;
            
            //previous and next images feature function 
            var newViewFunction = function(passedBackCounter, passedAnimationStyle){
               
                //New Image View
                var newView = Titanium.UI.createImageView({
                    image: "imgSrc/" + myGalleryImagesCount[passedBackCounter],
                    width: 304,
                    height: 202,
                });
                    
                //Animation Method
                secondMyImagesContainers.animate({
                    view: newView, 
                    transition: passedAnimationStyle,
                });    
                
                //Third Main Window Title changer, "nulling" the image property of the second my image container and overwriting the counter variable values   
                thirdMainWindow.title = myGalleryImagesCount[passedBackCounter];
                secondMyImagesContainers.backgroundImage = null;
                backCounter = passedBackCounter;
                nextCounter = passedBackCounter;
            };
            
            backButton.addEventListener("click", function(e){
                
                //Button presed indicator 
                backButton.opacity = 0.3;
                //Conditional that check the index position of the current image, choose the presviuos image and track the image index 
                if (secondMyImagesContainers.backgroundImage == ("imgSrc/" + myGalleryImagesCount[0]) || backCounter == 0){
                    
                    //Alert test for debugging purposes
                    //alert("First \"if ()\" Executed! " + "Arrary = " + (myGalleryImagesCount.length - 1) );
                    
                    backCounter = lengthCounter;
                    newViewFunction(backCounter, backAnimationStyle);
                   
                } else if (backCounter > 0 || secondMyImagesContainers.backgroundImage == !("imgSrc/" + myGalleryImagesCount[0]) ){
                    
                    //Alert test for debugging purposes
                    //alert("Second \"else if ()\" Executed! Arrary = " + (myGalleryImagesCount.length - 1) );
                    
                    backCounter--;
                    newViewFunction(backCounter, backAnimationStyle);
                    
                } else {
                    
                    //Alert test for debugging purposes
                    //alert("Something went WRONG!!! Array = " + (myGalleryImagesCount.length - 1) );
                    
                };//End Of Conditional
                
                //Button idle indicator 
                backButton.opacity = 0.2;
                
            });//End Of Back Button's Event Listener
             
            //Next Button Event Listener 
            nextButton.addEventListener("click", function(e){
               
                //Button presed indicator  
                nextButton.opacity = 0.3;
                
                //Conditional that check the index position of the current image, choose the presviuos image and track the image index 
                if (secondMyImagesContainers.backgroundImage == ("imgSrc/" + myGalleryImagesCount[lengthCounter]) || nextCounter == lengthCounter ){
                    
                    //Alert test for debugging purposes
                    //alert("First \"if ()\" Executed! " + "Arrary = " + (myGalleryImagesCount.length - 1) );
                    
                    nextCounter = 0;
                    newViewFunction(nextCounter, nextAnimationStyle);
                   
                } else if (nextCounter < lengthCounter || secondMyImagesContainers.backgroundImage == !("imgSrc/" + myGalleryImagesCount[lengthCounter]) ){
                    
                    //Alert test for debugging purposes
                    //alert("Second \"else if ()\" Executed! Arrary = " + (myGalleryImagesCount.length - 1) );
                    
                    nextCounter++;
                    newViewFunction(nextCounter, nextAnimationStyle);
                    
                } else {
                    
                    //Alert test for debugging purposes
                    alert("Something went WRONG!!! Array = " + (myGalleryImagesCount.length - 1) );
                
                };//End Of Conditional
                
                //Button presed indicator 
                nextButton.opacity = 0.2;
                
            });//End Of Next Button
        
        };//End Of Conditional that check if the Images containers had been clicked
    
    });//End Of Event listener propagation technique
    
    //Event Listaner controler for orientation changes
    Ti.Gesture.addEventListener("orientationchange", function(e){
        
        //Alert test for debugging purposes
        //alert("Change Detected");
        
        //Recalculating the device's display width value
        var secondCalculationPlatformWidth = Ti.Platform.displayCaps.platformWidth;
        
        //Seting the thumnails new width value
        for (var i = 0, j = imagesHolderArray.length; i < j; i++){
            imagesHolderArray[i].width = (secondCalculationPlatformWidth / imagesPerRow) - (imagesTotalSpace / imagesPerRow);
        };
        
    });
    
    //Adding the scroll view container to the Second Main Window 
    secondMainWindow.add(scrollViewContainer);
    
    //Setting navigation controler to the Second Main Window
    navWindow.openWindow(secondMainWindow, {
        animate: true
    });

};//End Of Master Function



