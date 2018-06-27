function Question(text, choices, answer, flavor) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.flavor = flavor;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
