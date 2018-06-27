function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i], quiz.getQuestionIndex().flavor);
        }

        showProgress();
    }
};
function CustomAlert(){
		this.render=function(dialog){
			var winW = window.innerWidth;
			var winH= window.innerHeight;
			var dialogoverlay=document.getElementById('dialogoverlay');
			var dialogbox=document.getElementById('dialogbox');
			dialogoverlay.style.display = "block";
			dialogoverlay.style.height= winH+"px";
			dialogbox.style.left= (winW/2) -(550 * .5) + "px";
			dialogbox.style.top="100px";
			dialogbox.style.display= "block";
			document.getElementById('dialogboxhead').innerHTML = 'Nice job! Did you know? ';
			document.getElementById('dialogboxbody').innerHTML= dialog;
			document.getElementById('dialogboxfoot').innerHTML= '<button onclick= "Alert.ok()">OK </button>';
		}
		this.ok= function(){
			document.getElementById('dialogbox').style.display= "none";
			document.getElementById('dialogoverlay').style.display="none";
		}
		this.wrong= function(){
			document.getElementById('dialogboxhead').innerHTML= 'Not exactly,';
		}
		
}

function guess(id, guess, flavor) {
    var button = document.getElementById(id);
	var flavor1=flavor;
    button.onclick = function() {
        quiz.guess(guess);
		Alert.render(flavor1);
		if (quiz.bool(guess)) Alert.wrong()  ;
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Hepatitis C is a treatable, viral infection. What is the HCV incubation time?", ["1-2 days","1-2 weeks","2 weeks to 6 months","6 months to 1 year"],"2 weeks to 6 months","Did you know that we don't have an awesome fact for you at the moment?"),
    new Question("Approximately many people around the world are living with chronic HCV?",["700 thousand","7 million","70 million","700 million","7 billion"],"70 million","Nearly 1 out of every 100 people suffer from chronic HCV infection"),
    new Question("How many new HCV infections are there per year worldwide?",["800 thousand","2 million","20 million","40 million"],"2 million","Anywhere between 60%-85% of these go on to become chronic"),
    new Question("Approximately what percentage of infected persons in the US are unaware of their infection?",["10%","25%","50%","75%","90%"],"50%","Although there aren't estimates for the rest of the world, the undiagnosed population is likely even higher within developing nations"),
    new Question("What are some of the disease complications related to HCV?",["Liver cancer","Liver cirrhosis / fibrosis","Liver failure","All of the above"],"All of the above","The liver can regenerate even after removal of almost 90% of your liver. Chronic HCV infection causes this regenerative power to create more scar tissue and cell replication, inducing cirrhosis and cancerous liver cells"),
    new Question("Follow-up question; what is WHO's estimated number of deaths due to HCV complications per year worldwide?",["400 thousand","200 thousand","100 thousand","50 thousand"],"400 thousand","This is an incredible number of deaths that can be prevented with early treatment")
];

// create quiz
var quiz = new Quiz(questions);
 var Alert= new CustomAlert();
// display quiz
populate();




