var previuosFunc = function(){
    if (labelText.text === stringsContainer[0]){
        counter2 = stringsContainer.length - 1;
        labelText.text = stringsContainer[counter2];
    } else if(labelText.text === stringsContainer[counter2]){
        counter2 --;
        labelText.text = stringsContainer[counter2];
    };
    if(counter2 === 0){
        counter2 = stringsContainer.length - 1;
    };
};

var NextFunc = function(){
    if(counter2 === stringsContainer.length - 1){
        counter2 = 0;
    };
    if (labelText.text === stringsContainer[stringsContainer.length - 1]){
        counter2 = 0;
        labelText.text = stringsContainer[counter2];
    } else if(labelText.text === stringsContainer[counter2]){
        counter2 ++;
        labelText.text = stringsContainer[counter2];
    };
};
button1.addEventListener("click", previuosFunc);
button2.addEventListener("click", NextFunc);