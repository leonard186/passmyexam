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
    /*
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
    */
];

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

        //check if element has class function
        hasClass: function(element, className) {
        return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
        },
        /*
       example:
       var elem = document.getElementById('elementID');
       hasClass(elem, 'active'); OUTPUT: true or false
       */

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
var view = (function (name){

    //access dom elements
    var elem = {
        answers: model.getID('answers'),
        answersInput: this.answers.getElementsByTagName('input'),
        question: model.getID('question'),
        answer1: model.getID('answer1'),
        answer2: model.getID('answer2'),
        answer3: model.getID('answer3'),
        answer4: model.getID('answer4'),
        info: model.getID('info'),
        submit: model.getID('submit-btn'),
        next: model.getID('submit-btn-next'),
        finished: model.getID('finished'),
        quizLayout: model.getID('quiz-layout'),
        finishedBtn: model.getID('finished-btn'),
        finalScore: model.getID('final-score')
    };


    var input = elem.answersInput;

    //counters to help validate user answers
    var selected = 0;
    var correctCount = 0;

    //function for resetting user validation counters
    var resetCounter = function() {
        selected = 0;
        correctCount = 0;
    };

    //check if user selection is correct then increment correct answer count
    var checkSelected = function() {
        for(var i=0; i < input.length; i++){
            if(input[i].value === '1' && input[i].checked) {
                selected++;
            }
        }
    };

    //check how many correct answers are supposed to be and increment the count
    var checkCorrectNo = function() {
        for(var i=0; i < model.quizArray[model.counter].correct.length; i++)  {
            if(model.quizArray[model.counter].correct[i] === 1) {
                correctCount++;
            }
        }
    };

    //make sure only the correct amount of answers are displayed
    var controlQuiz = function() {
        if(model.counter >= model.quizArray.length - 1) {
            elem.quizLayout.style.display = "none";
            elem.finished.style.display = "block";
        }
    };

    //when this function is called it will display final results tot he DOM
    var renderScore = function() {
        return elem.finalScore.innerHTML = `${model.score} out of ${model.quizArray.length}`;
    };

    //toggle between submit and continue(next) button
    var toggleButtons = function() {
        if (model.hasClass(elem.submit, 'show')) {
            elem.submit.classList.toggle('show');
            elem.submit.classList.toggle('hide');
            elem.next.classList.toggle('show');
            elem.next.classList.toggle('hide');
        } else if (model.hasClass(elem.next, 'show')) {
            elem.submit.classList.toggle('show');
            elem.submit.classList.toggle('hide');
            elem.next.classList.toggle('show');
            elem.next.classList.toggle('hide');

        }
    };

    return {

        //render the quiz to the dom with appropriate logic
        generateQuiz: function(chooseQuiz) {
            model.getArray(chooseQuiz);

            //render the questions and answers into the appropriate elements
            function render() {
                elem.question.innerHTML = model.quizArray[model.counter].question;
                elem.answer1.innerHTML =
                    `<label>
                        <input type="checkbox" value="${model.quizArray[model.counter].correct[0]}">
                        ${model.quizArray[model.counter].answer1}
                    </label>`;
                elem.answer2.innerHTML =
                    `<label>
                        <input type="checkbox" value="${model.quizArray[model.counter].correct[1]}">
                        ${model.quizArray[model.counter].answer2}
                    </label>`;
                elem.answer3.innerHTML =
                    `<label>
                         <input type="checkbox" value="${model.quizArray[model.counter].correct[2]}">
                         ${model.quizArray[model.counter].answer3}
                    </label>`;
                elem.answer4.innerHTML =
                    `<label>
                         <input type="checkbox" value="${model.quizArray[model.counter].correct[3]}">
                         ${model.quizArray[model.counter].answer4}
                    </label>`;
            };
            //render first question
            render();

            //move to next question while validating the answer
            elem.submit.addEventListener("click", function(){
                //render only available amount of questions/quiz
                controlQuiz();
                //verify the accuracy of the answers and set the score accordingly
                checkSelected();
                checkCorrectNo();

                if(selected === correctCount && selected !== 0) {
                    resetCounter();
                    model.score++;
                    model.counter++;
                    renderScore();
                    render();
                } else {
                    //if user gives wrong choices render an explanation to the DOM
                    elem.info.innerHTML = `<h2 class="red">Remember this:</h2></br>${model.quizArray[model.counter].info}`;
                    toggleButtons();
                    resetCounter();
                }
            });

            //this button will go to the next question without incrementing the score
            elem.next.addEventListener("click", function() {
                elem.info.innerHTML = '';
                controlQuiz();
                resetCounter();
                model.counter++;
                toggleButtons();
                render();
            });
        },

        //refresh page added for finish button
        finished: function() {
            elem.finishedBtn.addEventListener('click', model.refresh);
        },
    }
})();

//global controller
var controller = (function(model, view){

    return {
        init: function(){
            view.generateQuiz(quiz1);
            view.finished();
        }
    }

})(model,view);

controller.init();