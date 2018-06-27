function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
		
    }

    this.questionIndex++;
}

Quiz.prototype.getQuestionIndex2 = function() {
    return this.questions[this.questionIndex-1];
}

Quiz.prototype.bool = function(answer) {
    if(this.getQuestionIndex2().isCorrectAnswer(answer)) {
        return(false);
		
    }

    return (true);
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}