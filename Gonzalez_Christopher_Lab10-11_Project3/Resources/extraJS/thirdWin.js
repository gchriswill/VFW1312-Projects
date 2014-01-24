var currentWindow3 = Ti.UI.currentWindow;

var score = 0;
var verifyer;

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
        
        "What was the main unveiled Apple device on WWDC 2012?",
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

var infoDialog = Ti.UI.createAlertDialog({
    message: "This trivia's accuracy is based on the information provided in this app's \"Info page\"",
    ok: "Play",
    title: "Important Message!"
});
infoDialog.show();

// Main Window Content Wrapper
var mainTriviaView = Ti.UI.createScrollView({
    backgroundColor: "#fff",
    backgroundImage: "../appWall4.png",
    width: "100%",
    height: "100%",
    layout: "vertical"
});


// Main Question View Area
var mainQuestionView =  Ti.UI.createView({
    borderColor: "#ccc",
    borderRadius: 40,
    height: "40%",
    top: 10,
    left: 10,
    right: 10
});

var questionView =  Ti.UI.createView({
    backgroundColor: "#fff",
    opacity: 0.8,
    bottom: 0,
});


var questionLabelView =  Ti.UI.createView({
    backgroundColor: "#dedede",
    height: Ti.UI.SIZE,
    top: 0,
});

var questionLabelText =  Ti.UI.createLabel({
    text: "Trivia Question",
    font: {
            fontSize: "25%", 
            fontFamily: "monospace", 
            fontWeight: "semibold"
    },
    textAlign: "center"
});

var questionText =  Ti.UI.createLabel({
    right: 10,
    left: 10,
    top: 30,
    height: Ti.UI.SIZE,
    font: {
            fontSize: "20%", 
            fontFamily: "monospace", 
            fontWeight: "semibold"
    },
    textAlign: "center"
}); 

var questionBottomLabelView =  Ti.UI.createView({
    backgroundColor: "#dedede",
    height: Ti.UI.SIZE,
    bottom: 0,
});

var questionBottomLabelText =  Ti.UI.createLabel({
    text: "Your Score: " + score,
    font: {
            fontSize: "25%", 
            fontFamily: "monospace", 
            fontWeight: "semibold"
    },
    textAlign: "center"
});//End of Question Area


//Main Answere View Area
var mainAnswerView =  Ti.UI.createView({
    borderColor: "#ccc",
    borderRadius: 40,
    height: "40%",
    top: 10,
    left: 10,
    right: 10
});

var answerView =  Ti.UI.createView({
    backgroundColor: "#fff",
    opacity: 0.8,
    bottom: 0,
});

var answerLabelView =  Ti.UI.createView({
    backgroundColor: "#dedede",
    height: Ti.UI.SIZE,
    top: 0,
});

var answerLabelText =  Ti.UI.createLabel({
    text: "Your Answer",
    font: {
            fontSize: "25%", 
            fontFamily: "monospace", 
            fontWeight: "semibold"
    },
    textAlign: "center"
});

var answerInputField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  returnKeyType: 1,
  hintText:"Type your answere here",
  font: {
            fontSize: "15%", 
            fontFamily: "monospace", 
            fontWeight: "semibold"
  },
  color: "#000",
  height: "30%",
  top: 30,
  left: 10,
  right: 10
  
});

var submitButton = Ti.UI.createLabel({
    color: "#000",
    text: "Submit",
    textAlign: "center",
    font: {
            fontSize: "15%", 
            fontFamily: "monospace", 
            fontWeight: "semibold"
    },
    backgroundColor: "#fff",
    borderColor: "#cecece",
    borderRadius: "15%",
    height: "25%",
    width: "25%",
    bottom: 5
});//End of Answer Area

//Ramdom Question and Answer
var ramdonNumber2 = function(){
    var secureWhile2 = 0;
    var ramdomizerCreator2 = Math.floor(Math.random() * triviaData.triviaQuestions.length);
    while(ramdomizerCreator2 == verifyer){
        secureWhile2++;
        ramdomizerCreator2 = Math.floor(Math.random() * triviaData.triviaQuestions.length);
        
        //Infinite loop secure breaker
        if (secureWhile2 == 30){
            secureWhile2 = 0;
            break;
        };
    };
    verifyer = ramdomizerCreator2;
};

ramdonNumber2();
questionText.text = triviaData.triviaQuestions[verifyer];

var submitFunction = function(){
    var inputValue = answerInputField.getValue();
    if (inputValue == triviaData.triviaAnswers[verifyer]){
        
        if (score >= 100){
            
            var winDialog = Ti.UI.createAlertDialog({
                message: "You had completed successfully the trivia challenge entirely...",
                ok: "Home Page",
                title: "Congratulations!"
            });
            winDialog.show();
            currentWindow3.close();
            
        }else{
            
            score += 5;
            
            var nextDialog = Ti.UI.createAlertDialog({
                message: "Your new score is " + score,
                ok: "Next challenge",
                title: "Well Done!"
            });
            nextDialog.show();
            
            ramdonNumber2();
            answerInputField.value = "";
            questionBottomLabelText.text = "Your Score: " + score;
            questionText.text = triviaData.triviaQuestions[verifyer];
            
        };
        
    }else if ( answerInputField.value == "" || answerInputField.value == null){
        
        var errorDialog = Ti.UI.createAlertDialog({
            message: "Please type your answer",
            ok: "Try Again",
            title: "Blank Error"
        });
        errorDialog.show();
    
    }else{
        
        var wrongDialog = Ti.UI.createAlertDialog({
            message: "Please try again or study the information in the \"Info Page\"",
            ok: "Try Again",
            title: "Wrong Answer!"
        });
        wrongDialog.show();
        answerInputField.value = "";
        
    };
};

submitButton.addEventListener("click", submitFunction);
answerInputField.addEventListener("return", submitFunction);


//Adding Question Area and Childs
questionBottomLabelView.add(questionBottomLabelText);
questionLabelView.add(questionLabelText);

mainQuestionView.add(questionView, questionLabelView, questionText, questionBottomLabelView);



//Adding Answer Area and Childs
answerLabelView.add(answerLabelText);
mainAnswerView.add(answerView, answerLabelView, answerInputField, submitButton);

//Main Window (Do not change)...
mainTriviaView.add(mainQuestionView, mainAnswerView);
currentWindow3.add(mainTriviaView);


















