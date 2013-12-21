var currentWindow2 = Ti.UI.currentWindow;
var newImageArray2 = currentWindow2.keysArrayPassed;
var navWindow = currentWindow2.nav;

currentWindow2.backgroundColor = "#dedede";
currentWindow2.title = "WWDC Information";

var wwdcData = {
    "WWDC2009" : {
        "secTitle" : "Developer Conference 2009",
        "secFooter" : "Location: Moscone West, SF",
        "data"   : [{
            "popular"  : "77",
            "assist"   : "89",
            "devs"     : "15,000 Registered Developers",
            "imgKey"   : "../WWDC_keys/" + newImageArray2[0],
            "apps"     : "Around 8,000 Apps in the AppStore",
            "year"     : "2009 Conference Details",
            "desc"     : "This event was hosted by Phil Schiller, Apple\"s SVP for Product Marketing. It was released the iPhone OS 3.0, the new MacBook Pro 13\" and OS X Snow Leopard was unveiled."
        }]
    },
    "WWDC2010" : {
        "secTitle"  : "Developer Conference 2010",
        "secFooter" : "Location: Moscone West, SF",
        "data"      : [{
            "popular"  : "82",
            "assist"   : "94",
            "devs"     : "37,000 Registered Developers",
            "imgKey"   : "../WWDC_keys/" + newImageArray2[1],
            "apps"     : "Around 60,000 Apps in the AppStore",
            "year"     : "2010 Conference Details",
            "desc"     : "Main focus was the unvieled iPhone 4, the transition of iPhone OS to iOS and the Face Time call service for the iPhone. "
        }]
    },
    "WWDC2011" : {
        "secTitle"  : "Developer Conference 2011",
        "secFooter" : "Location: Moscone West, SF",
        "data"      : [{
            "popular"  : "100",
            "assist"   : "98",
            "devs"     : "60,000 Registered Developers",
            "imgKey"   : "../WWDC_keys/" + newImageArray2[2],
            "apps"     : "Around 200,000 Apps in the AppStore",
            "year"     : "2011 Conference Details",
            "desc"     : "Historic event due to it was the last WWDC hosted by Steve Jobs, the main focus was the release of Apple\"s cloud service \"iCloud\", iOS 5. Also, it was the first event were a young kid around 13 years old was granted to access some of the stages of the event."
        }]
    },
    "WWDC2012" : {
        "secTitle"  : "Developer Conference 2012",
        "secFooter" : "Location: Yerba Buena Gardens",
        "data"      : [{
            "popular"  : "91",
            "assist"   : "100",
            "devs"     : "80,000 Registered Developers",
            "imgKey"   : "../WWDC_keys/" + newImageArray2[3],
            "apps"     : "Around 400,000 Apps in the AppStore",
            "year"     : "2012 Conference Details",
            "desc"     : "Main focus was the unveiled MacBook Pro with Retina Display, the revamped MacBook Air, OS X Mountain Lion and iOS 6. Also, Apple provided to minors over 13, to purchase tickets through their parents signature, to access some stages at the event."
        }]
    },
    "WWDC2013" : {
        "secTitle"  : "Developer Conference 2013",
        "secFooter" : "Location: Yerba Buena Gardens",
        "data"      : [{
            "popular"  : "100",
            "assist"   : "100",
            "devs"     : "100,000+ Registered Developers",
            "imgKey"   : "../WWDC_keys/" + newImageArray2[4],
            "apps"     : "Around 1,000,000+ Apps in the AppStore",
            "year"     : "2013 Conference Details",
            "desc"     : "Main focus was the release of OS X 10.9 and the Mac Pro. Also, the expected iTunes Radio, iWork through iCloud, the AirPort Time Capsule and AirPort Extreme services were anounced too." 
        }]
     }  
};//End of JSON Data

var myTable = Ti.UI.createTableView({
    style: Ti.UI.iPhone.TableViewStyle.GROUPED,
});

var sections = [];
for (var n in wwdcData){
    var tableSection = Ti.UI.createTableViewSection({
        headerTitle: wwdcData[n].secTitle,
        footerTitle: wwdcData[n].secFooter
    });
    for (var i = 0, j = wwdcData[n].data.length; i < j; i++){
        var tableRows = Ti.UI.createTableViewRow({
            title:    wwdcData[n].data[i].year,
            hasChild: true,
            
            devs:     wwdcData[n].data[i].devs,
            imgKey:   wwdcData[n].data[i].imgKey,
            apps:     wwdcData[n].data[i].apps,
            popular:  wwdcData[n].data[i].popular,
            assist:   wwdcData[n].data[i].assist,
            desc:     wwdcData[n].data[i].desc
        });
        tableSection.add(tableRows);
    };
    sections.push(tableSection);
};//End


myTable.addEventListener("click", function(e){
  
  var detailWindow = Ti.UI.createWindow({
      title: e.source.title,
      backgroundColor: "#fff",
      barColor: "#fff",
      url: null

  });
  
  //Detail Label for holding text creator
  var imgKeyView = Ti.UI.createImageView({
       image: e.source.imgKey,
       width: 100,
       height: 100,
       top: 40,
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
      top: 40,
      right: 20,
      height: 20
      
  });
  
  var popFiller = Ti.UI.createView({
      borderRadius: 10,
      borderColor: "#cecece",
      borderWidth: 1,
      width: 100,
      height: 20,
      top: 20 + popLabel.top,
      right: 30,
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
      top: 20 + popLabel.height + popFiller.top,
      right: 20,
      height: 20
      
  });
  
  var assitFiller = Ti.UI.createView({
      borderRadius: 10,
      borderColor: "#cecece",
      borderWidth: 1,
      width: 100,
      height: 20,
      top: 20 + assitLabel.top,
      right: 30,
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
  
  
  var descLabel = Ti.UI.createLabel({
      text: e.source.desc,
      font: {
            fontSize: 16, 
            fontFamily: "monospace", 
            fontWeight: "semibold"
      },
      bottom: 40,
      left: 20,
      right: 20
  });
  
  
  
  detailWindow.add(descLabel);
  
  detailWindow.add(assitLabel);
  
  assitFiller.add(assistFillering);

  detailWindow.add(assitFiller);

  
  
  detailWindow.add(popLabel);
  
  popFiller.add(popFillering);

  detailWindow.add(popFiller);
  
  detailWindow.add(imgKeyView);
  
  
  navWindow.openWindow(detailWindow, {
      animate: true
      });
});

myTable.setData(sections);
currentWindow2.add(myTable);






