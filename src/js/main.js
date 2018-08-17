var Quiz = function(question, answer1, answer2, answer3, answer4, correct, info){
    this.question = question,
    this.answer1 = answer1,
    this.answer2 = answer2,
    this.answer3 = answer3,
    this.answer4 = answer4,
    this.correct = correct,
    this.info = info
};

var quiz1 = [
    new Quiz(
        'question 1',
        'wrong answer1',
        'wrong answer2',
        'correct answer1',
        'correct answer2',
        [0, 0, 1, 1],
        'just because'
    ),
    new Quiz(
        'question 2',
        'wrong answer3',
        'wrong answer4',
        'wrong answer5',
        'correct answer2',
        [0, 0, 0, 1],
        'just because'
    ),
    new Quiz(
        'question 3',
        'wrong answer1',
        'wrong answer2',
        'correct answer1',
        'wrong answer',
        [0, 0, 1, 0],
        'just because'
    ),
    new Quiz(
        'question 4',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 5',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 6',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 7',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 8',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 9',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 10',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 11',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 12',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 13',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 14',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 15',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 16',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 17',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 18',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 19',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 20',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 21',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 22',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 23',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'question 24',
        'correct answer1',
        'correct answer2',
        'wrong answer',
        'wrong answer',
        [1, 1, 0, 0],
        'just because'
    ),
    new Quiz(
        'N/A',
        'N/A',
        'N/A',
        'N/A',
        'N/A',
        [0, 0, 0, 0],
        'N/A'
    ),

]

//quiz controller
var model = (function(){
    return {
        //storing the count of the quizzes
        counter: 0,

        //store score points
        score: 0,

        //storing the quiz array
        quizArray: [],

        //storing the validation pattern
        quizValidationArray: [],

        //refresh page
        refresh: function() {
            location.reload();
        },

        //shortcut function for getting elements by id
        getID: function(id) {
            return document.getElementById(id);
        },

        //loop through the quiz array and push into a global array
        getArray: function(array) {
            for (var i = 0; i < array.length; i++) {
                this.quizArray.push(array[i]);
            }
        },
         //get the validation pattern array (ex. [0,0,1,1]
         getValidationArray: function(array){
             for(var i=0; i<array.length;i++){
                 this.quizValidationArray.push(array[i].correct);
             }
         }

    }

})();

//user interface controller
var view = (function(){

    //access dom elements
    var elem = {
        question: model.getID('question'),
        answer1: model.getID('answer1'),
        answer2: model.getID('answer2'),
        answer3: model.getID('answer3'),
        answer4: model.getID('answer4'),
        info: model.getID('info'),
        submit: model.getID('submit-btn'),
        finished: model.getID('finished'),
        quizLayout: model.getID('quiz-layout'),
        finishedBtn: model.getID('finished-btn')
    };



    return {
        renderQuiz: function(chooseQuiz) {
            model.getArray(chooseQuiz);
            //display quiz in the dom function
            function render() {
                elem.question.innerHTML = model.quizArray[model.counter].question;
                document.getElementById('a1').innerHTML = model.quizArray[model.counter].answer1;
                document.getElementById('a2').innerHTML = model.quizArray[model.counter].answer2;
                document.getElementById('a3').innerHTML = model.quizArray[model.counter].answer3;
                document.getElementById('a4').innerHTML = model.quizArray[model.counter].answer4;
                elem.info.innerHTML = model.quizArray[model.counter].info;
            };

            //trigger render quiz function
            render();
            //handle submit button
            elem.submit.addEventListener("click", function(){
                function submit() {
                    var checked = [].slice.call(
                        multiLanguageSelectorContainer
                            .querySelectorAll('[type=checkbox]:checked') )
                        .map(function (v){
                            return v.value;
                        });
                    model.counter++;
                    render();
                if(model.counter >= model.quizArray.length -1) {
                    elem.quizLayout.style.display = "none";
                    elem.finished.style.display = "block";
                    return false;
                }

                console.log(model.counter);
            });
        },

        finished: function() {
            elem.finishedBtn.addEventListener('click', model.refresh);
        },

        setValue: function(){
            model.getArray(quiz1);
            model.getValidationArray(model.quizArray);
            var x = model.quizValidationArray[0][0];
            elem.answer1.value = x;

        }


    }

})();

//global controller
var controller = (function(model, view){

    return {
        init: function(){
            view.renderQuiz(quiz1);
            view.finished();


        }
    }

})(model,view);

controller.init();