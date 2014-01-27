//An Array of objects with questions, choices and correct answers

(function(){
    var allQuestions = [
    {
        question: "Which movie did Tom Hanks loose 50 pounds to play the lead role ?",
        choices:["The Terminal","Forest Gump","Saving Private Ryan","Cast Away"],
        correctAnswer:3
    },
    {
        question: "Who played the lead role in the movie '127 hours' ?",
        choices:["James Franco","Emile Hirsch","Brendan Mackey","Kevin Costner"],
        correctAnswer:0
    },
    {
        question: "Who wrote the soundtrack for the movie 'Into the Wild?",
        choices:["Chris Cornell","Neil Young","Eddy Vedder","Jerry Cantrell"],
        correctAnswer:2
    },
    {
        question: "Which is the most highest-grossing movie on the list below ?",
        choices:["Titanik","Avatar","Terminator 2: Judgment Day","Iron Man 3"],
        correctAnswer:1
    },
    {
        question: "Who is the director of the movie 'Apocalypto'?",
        choices:["Peter Jackson","Danny Boyle","Sean Penn","Mel Gibson"],
         correctAnswer:3
    }

];

//get reference to the basic tags and initialize global variables
var div = document.getElementById("wrapper");
var h2 = document.getElementById("qTitle");
var ul = document.getElementById("list");
var nextBtn = document.getElementById("nextBtn");
var i = 0;
var allQuestionsLen = allQuestions.length;
var correctAnswers = 0;


//create content for h1 and ul
function createContent(i){
    for(var j= 0, len = allQuestions[i].choices.length; j<len; j++){
        var li = document.createElement("li");
        //create radio buttons
        var radio = document.createElement("input");
        radio.setAttribute("type","radio");
        radio.setAttribute("name", "question" + i);
        radio.setAttribute("value", allQuestions[i].choices[j]);

        //create text of radio buttons
        var text = document.createTextNode(allQuestions[i].choices[j]);


        ul.appendChild(li);
        li.appendChild(radio);
        li.appendChild(text);
        h2.innerHTML = allQuestions[i].question;
    }
}
//intial population
createContent(i);



nextBtn.onclick = function(){
    var radioBtns = document.getElementsByName("question" + i);// a reference to all radio btns
    var checkedBtn = false; //turn to true if checked
//iterate through to find the checked radio button
 for(var k = 0;k<radioBtns.length;k++){
     if(radioBtns[k].checked){
         checkedBtn = true;

     if(k === allQuestions[i].correctAnswer){
         correctAnswers++;
        }
     }
 }
    if(!checkedBtn){
        alert("You need to make a choice!")//alert If no answer
        return undefined;// end function so that a user can make a choice
    }
    //make the next set of choices
    i++

    //remove the last list of choices
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
    //
    if(i<allQuestionsLen){
        createContent(i);
    }
else{
 h2.innerHTML = "Results";
 var p = document.createElement("p");
 var text = document.createTextNode("Your score is " + correctAnswers + "/" + allQuestionsLen);
 p.appendChild(text);
 ul.appendChild(p);



    }

}

})();







