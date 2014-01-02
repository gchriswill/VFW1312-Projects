var currentWindow3 = Ti.UI.currentWindow;
var triviaData = {
    "triviaQuestions": [
        
        "Who hosted the WWDC 2009 keynote?",
        "Which version of OS X was unvieled on WWDC 2009?",
        "Write the Apple's mobile device that was featured in the WWDC 2009 event?",
        
        "What band was performing in the special activity on  WWDC 2010?",
        "What new iPhone's featured service was unveiled on WWDC 2010?",
        "On WWDC 2010 was anouced the transcition what?",
        
        "Because of who the WWDC 2011 is an historic event?",
        "What percentage was the \"Popularity\" on WWDC 2011?",
        "On WWDC 2011, how old was the person that got access granted?",
        
        "What was the main Apple device that unveiled on WWDC 2012?",
        "Which version of iOS was unveiled on WWDC 2012?",
        "What percentage was the \"Assistance\" on WWDC 2012?",
        
        "Which game debuted (related to racing) on WWDC 2013?",
        "Which new iTunes's service was released in WWDC 2013?",
        "Which Apple's new device was the sneak peak about in WWDC 2013?"
    ],
    
    "triviaAnswers": [
        
        "Phil Schiler",
        "Snow Leopard",
        "iPhone 3Gs",
        
        "OK GO",
        "FaceTime",
        "iPhone OS to iOS",
        
        "Steve Jobs",
        "100",
        "13",
        
        "MacBook Pro With Retina Display",
        "6",
        "100",
        
        "AnkiDrive",
        "iTunes's Radio",
        "Mac Pro"
    ]
};

currentWindow3.backgroundColor = "#dedede";
currentWindow3.title = "WWDC Trivia!";

// Main Content Wrapper
var mainTriviaView = Ti.UI.createView({
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    layout: "vertical"
});


// Main Question View
var mainQuestionView =  Ti.UI.createView({
    backgroundColor: "#fff",
    borderColor: "#333",
    borderRadius: 10,
    height: "33%",
    top: 10,
    left: 10,
    right: 10
});

mainTriviaView.add(mainQuestionView);
currentWindow3.add(mainTriviaView);


















