var currentWindow2 = Ti.UI.currentWindow;
var newImageArray2 = currentWindow2.keysArrayPassed;
var navWindow      = currentWindow2.nav;


currentWindow2.backgroundColor = "#dedede";
currentWindow2.title = "WWDC Information";

currentWindow2.orientationModes = [
        Ti.UI.PORTRAIT
];

var wwdcData = {
    "WWDC2009" : {
        "secTitle"  : "Developer Conference 2009",
        "secFooter" : "Location: Moscone West, SF",
        "data"      : [{
            "popular"  : "77",
            "assist"   : "89",
            "year"     : "2009 Conference Details",
            "devs"     : "15,000 Registered Developers",
            "imgKey"   : ["../WWDC_keys/" + newImageArray2[0], 100],
            "apps"     : "Around 8,000 Apps in the AppStore",
            "images"   : [{img: "../sliderImgs/2009/2009_1.png"}, {img: "../sliderImgs/2009/2009_2.png"}, {img: "../sliderImgs/2009/2009_3.png"}, {img: "../sliderImgs/2009/2009_4.png"}],
            "desc"     : "This event's keynote was hosted by Phil Schiller (Apple\'s SVP for Product Marketing) due to Steve Jobs's absence because of Job's health wasn't good at the moment. It was released the iPhone OS 3.0 and unveiled the iPhone 3Gs, the new MacBook Pro 13\" and OS X Snow Leopard was unveiled."
        }]
    },
    "WWDC2010" : {
        "secTitle"  : "Developer Conference 2010",
        "secFooter" : "Location: Moscone West, SF",
        "data"      : [{
            "popular"  : "82",
            "assist"   : "94",
            "year"     : "2010 Conference Details",
            "devs"     : "37,000 Registered Developers",
            "imgKey"   : ["../WWDC_keys/" + newImageArray2[1], 85],
            "apps"     : "Around 60,000 Apps in the AppStore",
            "images"   : [{img: "../sliderImgs/2010/2010_1.png"}, {img: "../sliderImgs/2010/2010_2.png"}, {img: "../sliderImgs/2010/2010_3.png"}, {img: "../sliderImgs/2010/2010_4.png"}],
            "desc"     : "Main focus was the unvieled iPhone 4, the transition of iPhone OS to iOS and the Face Time call service for the iPhone. Also, Apple presented the \"App Wall\", a huge wall displaying all the App Store\'s apps and had a special activity with performing artists such as the American alternative rock band \"OK GO\"."
        }]
    },
    "WWDC2011" : {
        "secTitle"  : "Developer Conference 2011",
        "secFooter" : "Location: Moscone West, SF",
        "data"      : [{
            "popular"  : "100",
            "assist"   : "98",
            "year"     : "2011 Conference Details",
            "devs"     : "60,000 Registered Developers",
            "imgKey"   : ["../WWDC_keys/" + newImageArray2[2], 85],
            "apps"     : "Around 200,000 Apps in the AppStore",
            "images"   : [{img: "../sliderImgs/2011/2011_1.png"}, {img: "../sliderImgs/2011/2011_2.png"}, {img: "../sliderImgs/2011/2011_3.png"}, {img: "../sliderImgs/2011/2011_4.png"}],
            "desc"     : "Historic event due to it was the last WWDC hosted by Steve Jobs, the main focus was the release of Apple\'s cloud service \"iCloud\" and iOS 5. Also, it was the first event were a young kid of 13 years old was granted to access some of the stages of the event."
        }]
    },
    "WWDC2012" : {
        "secTitle"  : "Developer Conference 2012",
        "secFooter" : "Location: Yerba Buena Gardens",
        "data"      : [{
            "popular"  : "91",
            "assist"   : "100",
            "year"     : "2012 Conference Details",
            "devs"     : "80,000 Registered Developers",
            "imgKey"   : ["../WWDC_keys/" + newImageArray2[3], 85],
            "apps"     : "Around 400,000 Apps in the AppStore",
            "images"   : [{img: "../sliderImgs/2012/2012_1.png"}, {img: "../sliderImgs/2012/2012_2.png"}, {img: "../sliderImgs/2012/2012_3.png"}, {img: "../sliderImgs/2012/2012_4.png"}],
            "desc"     : "Main focus was the unveiled MacBook Pro with Retina Display, the revamped MacBook Air, OS X Mountain Lion and iOS 6. Also, Apple granted to minors over 13, to purchase tickets through their parents permissions and signature, to access some stages at the event."
        }]
    },
    "WWDC2013" : {
        "secTitle"  : "Developer Conference 2013",
        "secFooter" : "Location: Yerba Buena Gardens",
        "data"      : [{
            "popular"  : "100",
            "assist"   : "100",
            "year"     : "2013 Conference Details",
            "devs"     : "100,000+ Registered Developers",
            "imgKey"   : ["../WWDC_keys/" + newImageArray2[4], 85],
            "apps"     : "Around 1,000,000+ Apps in the AppStore",
            "images"   : [{img: "../sliderImgs/2013/2013_1.png"}, {img: "../sliderImgs/2013/2013_2.png"}, {img: "../sliderImgs/2013/2013_3.png"}, {img: "../sliderImgs/2013/2013_4.png"}],
            "desc"     : "Main focus was the release of OS X 10.9 \"Mavericks\", the sneak peak of the new and super powerfull Mac Pro and the debut of \"AnkiDrive\", the AI racing game. Also, the expected iTunes Radio service was launched and iWork through iCloud beta was released for developers." 
        }]
     }  
};//End of JSON Data

var myTable = Ti.UI.createTableView({
    style: Ti.UI.iPhone.TableViewStyle.GROUPED,
});

var sections = [];
for (var n in wwdcData){
    var tableSection  = Ti.UI.createTableViewSection({
        headerTitle:  wwdcData[n].secTitle,
        footerTitle:  wwdcData[n].secFooter
    });
    for (var i = 0, j = wwdcData[n].data.length; i < j; i++){
        var tableRows = Ti.UI.createTableViewRow({
            title:    wwdcData[n].data[i].year,
            hasChild: true,
            
            popular:  wwdcData[n].data[i].popular,
            assist:   wwdcData[n].data[i].assist,
            devs:     wwdcData[n].data[i].devs,
            imgKey:   wwdcData[n].data[i].imgKey,
            apps:     wwdcData[n].data[i].apps,
            img:      wwdcData[n].data[i].images,
            desc:     wwdcData[n].data[i].desc
            
        });
        tableSection.add(tableRows);
    };
    sections.push(tableSection);
};//End


myTable.addEventListener("click", function(e){
    
    var newHeight    = Ti.Platform.displayCaps.platformHeight;
  
    var detailWindow = Ti.UI.createWindow({
        title: e.source.title,
        backgroundColor: "#fff",
        barColor: "#fff",
        url: null

    });
  
    //Detail Label for holding text creator
    var imgKeyView = Ti.UI.createImageView({
        image: e.source.imgKey[0],
        width: e.source.imgKey[1],
        height: e.source.imgKey[1],
        top: 10,
        left: 20
        //font: {fontSize: 18, fontFamyly: "Arial"}
    });

//Filler Bars
    var popLabel = Ti.UI.createLabel({
        text: "Popularity: " + e.source.popular + "%",
        font: {
            fontSize: 12, 
            fontFamily: "monospace", 
            fontWeight: "semibold"
        },
        top: 10,
        right: 10,
        height: 20
      
    });
  
    var popFiller = Ti.UI.createView({
        borderRadius: 10,
        borderColor: "#cecece",
        borderWidth: 1,
        width: 100,
        height: 20,
        top: 10 + popLabel.height,
        right: 15,
        zIndex: 2
      
    });
  
    var popFillering = Ti.UI.createView({
        backgroundColor: "#82D8FF",
        //borderRadius: 10,
        width: e.source.popular,
        height: 20,
        top: 0,
        left: 0 
    });
  
    var assitLabel = Ti.UI.createLabel({
        text: "Assistance: " + e.source.assist + "%",
        font: {
            fontSize: 12, 
            fontFamily: "monospace", 
            fontWeight: "semibold"
        },
        top: popFiller.top + popFiller.height,
        right: 10,
        height: 20
      
    });
  
    var assitFiller = Ti.UI.createView({
        borderRadius: 10,
        borderColor: "#cecece",
        borderWidth: 1,
        width: 100,
        height: 20,
        top: assitLabel.top + assitLabel.height,
        right: 15,
        zIndex: 2
      
    });
  
    var assistFillering = Ti.UI.createView({
        backgroundColor: "#82D8FF",
        //borderRadius: 10,
        width: e.source.assist,
        height: 20,
        top: 0,
        left: 0 
    });
//End of bars
 
    var paginImageViewArray = [];
    for (var i = 0, j = e.source.img.length; i < j; i++){
        var paginImages = Ti.UI.createView({
            backgroundImage: e.source.img[i].img,
            backgroundTopCap: "100%",
            backgroundLeftCap: "100%"
        });
            
        paginImageViewArray.push(paginImages);
    };
    
    var wwdcPagingImagesView = Ti.UI.createScrollableView({
        showPagingControl: true,
        pagingControlColor: "gray", 
        views: paginImageViewArray,
        height: 200,
        top: assitFiller.top + assitFiller.height + 20,
        left:10,
        right: 10,
        touchEnabled: false
    });
    
    var descLabelHolder = Ti.UI.createScrollView({
        showVerticalScrollIndicator: true,
        scrollIndicatorStyle: 1,
        backgroundColor: "gray",
        layout: "vertical",
        height:  newHeight - 390,
        top: wwdcPagingImagesView.top + wwdcPagingImagesView.height,
        left: 10,
        right: 10,
        touchEnabled: false
        
    });
  
    var descLabel = Ti.UI.createLabel({
        color: "#fff", 
        text: e.source.desc,
        font: {
            fontSize: 14, 
            fontFamily: "monospace", 
            fontWeight: "semibold"
        },
        height: Ti.UI.Fill,
        top: 10,
        left: 10,
        right: 10
    });
  
    descLabelHolder.add(descLabel);
    assitFiller.add(assistFillering);
    popFiller.add(popFillering);
    detailWindow.add(imgKeyView, popFiller, popLabel, assitFiller, assitLabel, wwdcPagingImagesView, descLabelHolder);
    
    pagingTimerFunction(wwdcPagingImagesView);
    if (newHeight == 480) scrollTimerFunction(descLabelHolder);
    
    navWindow.openWindow(detailWindow, {
        animate: true
    });
    
    
});

var scrollTimerFunction = function(descLabelHolder){
    
    var counter1 = 0;
    
    var scrollTimer = setInterval(function(){
        descLabelHolder.scrollTo(0, counter1);
        counter1++;
        
        if( counter1 == 120){
            clearInterval(scrollTimer);
            descLabelHolder.scrollTo(0, 0);
            descLabelHolder.touchEnabled = true;
            counter1 = 0;
        };
        
    }, 150);
    
};

var pagingTimerFunction = function(wwdcPagingImagesView){
    
    var counter2 = wwdcPagingImagesView.currentPage;
    
    var paginTimer = setInterval(function(){
        
        if(counter2 > wwdcPagingImagesView.views.length){
            clearInterval(paginTimer);
            wwdcPagingImagesView.currentPage = 0;
            wwdcPagingImagesView.touchEnabled = true;
            counter2 = 0;
        };
        wwdcPagingImagesView.currentPage = counter2;
        counter2++;
        
    }, 3000);
};


myTable.setData(sections);
currentWindow2.add(myTable);






