firstViewConatiner.addEventListener("click", function(){

    //Second Main Window
    var secondMainWindow = Ti.UI.createWindow({
        title: "Gallery's Thumbnails",
        backgroundImage: "patternImgs/mainPattern.png",
        backgroundRepeat: true,
        barColor: "#dedede",
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
        horizontalWrap: true
    });
    
    var myGallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "imgSrc");
    var myGalleryImagesCount = myGallery.getDirectoryListing();
    
    for (var i = 0, j = myGalleryImagesCount.length; i < j; i++){
        
        var myImagesContainers = Ti.UI.createView({
            backgroundImage: "imgSrc/" + myGalleryImagesCount[i],
            borderColor: "#dedede",
            width: "22%",
            height: 70,
            top: 5,
            left: 5,
            right: 5,
            bottom: 5,
            passingInt: i
            
        });
        
        scrollViewContainer.add(myImagesContainers);
        
        myImagesContainers.addEventListener("click", function(){
            
            var thirdMainWindow = Ti.UI.createWindow({
            title: myGalleryImagesCount[this.passingInt],
            backgroundImage: "patternImgs/mainPattern.png",
            backgroundRepeat: true,
            barColor: "#dedede"
            });
            
            var secondMyImagesContainers = Ti.UI.createView({
                backgroundImage: "imgSrc/" + myGalleryImagesCount[this.passingInt],
                width: "95%",
                height: "55%"
            });
            
            // var NextButton = Ti.UI.createLabel({
                // text: "Next",
                // textAlign: "center",
                // color: "#fff",
                // borderRadius: 5,
                // backgroundColor: "black",
                // width: 100,
                // height:25,
                // right: 20,
                // bottom: 20
            // });
            
            // var PreviousButton = Ti.UI.createLabel({
                // text: "Previous",
                // textAlign: "center",
                // color: "#fff",
                // borderRadius: 5,
                // backgroundColor: "black",
                // width: 100,
                // height:25,
                // left: 20,
                // bottom: 20
            // });
            // thirdMainWindow.add(PreviousButton);
            // thirdMainWindow.add(NextButton);
            thirdMainWindow.add(secondMyImagesContainers);
            
            navWindow.openWindow(thirdMainWindow, {animate: true});
       });
    };
    
    secondMainWindow.add(scrollViewContainer);
    
    navWindow.openWindow(secondMainWindow, {animate: true});
});
