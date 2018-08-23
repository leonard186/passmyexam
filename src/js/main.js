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

        //set timer value
        timer: 5,

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

        scorePercentage: function() {
            var totalQuestions = this.quizArray.length;
            var totalScore = this.score;
            var percentageScore = Math.round((totalScore / totalQuestions) * 100);
            return percentageScore;
        },
    }

})();

//user interface controller
var view = (function (name){

    //access dom elements
    var elem = {
        answers: model.getID('answers'),
        answersInput: this.answers.getElementsByTagName('input'),
        answersLabel: this.answers.getElementsByTagName('label'),
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
        finalScore: model.getID('final-score'),
        quizCount: model.getID('quiz-count'),
        countDown: model.getID('count-down')
    };


    var input = elem.answersInput;

    //counters to help validate user answers
    var selected = 0;
    var wrong = 0;
    var correctCount = 0;

    //function for resetting user validation counters
    var resetCounter = function() {
        selected = 0;
        wrong = 0;
        correctCount = 0;
    };

    //check if user selection is correct then increment correct answer count
    var checkSelected = function() {
        for(var i=0; i < input.length; i++){
            //assigning input elements parent to a variable
            var parentNode1 = input[i].parentNode;
            var parentNode2 = parentNode1.parentNode;
            //style the choices according to validity
            input[i].value === '1' ? parentNode2.classList.add('green') : parentNode2.classList.add('red');
            //quiz logic
            if(input[i].value === '0' && input[i].checked){
                wrong++;
            }
            if(input[i].value === '1' && input[i].checked) {
                selected++;
            }
            //disable check buttons once the validation process has gone through
            input[i].disabled = true;
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
        var percentageScore = model.scorePercentage();
        if(percentageScore >= 75) {
            return elem.finalScore.innerHTML =
                `<h3 class="green bold">Passed</h3>
                <p>Your scored <span class="bold">${model.score}</span> out of 
                <span class="bold">${model.quizArray.length}</span> 
                (<span class="green bold">${model.scorePercentage()}%</span>)</p>`;
        } else {
            return elem.finalScore.innerHTML =
                `<h3 class="red bold">Failed!</h3> 
                <p>The pass rate is <span class="bold green">75%</span> or higher</p>
                <p>You scored <span class="bold">${model.score}</span>  
                out of <span class="bold">${model.quizArray.length}</span> 
                (<span class="red bold">${model.scorePercentage()}%</span>)</p>`;
        }
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

    var countDownTimer = function() {
        var renderElem = elem.countDown;
        renderElem.innerHTML = model.timer;
        function timing() {
            model.timer--;
            renderElem.innerHTML = model.timer;
        }
        setInterval(timing, 1000)
    };



    return {
        //render the quiz to the dom with appropriate logic
        generateQuiz: function(chooseQuiz) {
            model.getArray(chooseQuiz);
            countDownTimer();
            //render the questions and answers into the appropriate elements
            function render() {
                elem.quizCount.innerHTML = `Question ${model.counter + 1} of ${model.quizArray.length}`;

                elem.question.innerHTML = `${model.quizArray[model.counter].question}`;
                elem.answer1.innerHTML =
                    `<div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[0]}">
                            ${model.quizArray[model.counter].answer1}
                        </label>
                    </div>`;
                elem.answer2.innerHTML =
                    `<div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[1]}">
                            ${model.quizArray[model.counter].answer2} 
                        </label>
                    </di v>`;
                elem.answer3.innerHTML =
                    `<div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[2]}">
                            ${model.quizArray[model.counter].answer3}
                        </label>
                    </div>`;
                elem.answer4.innerHTML =
                    ` <div>
                        <label>
                            <input type="checkbox" value="${model.quizArray[model.counter].correct[3]}">
                            ${model.quizArray[model.counter].answer4}
                        </label>
                    </div>`;
            };
            //render first question
            render();

            //move to next question while validating the answer
            elem.submit.addEventListener("click", function(){
                console.log(`good counter is: ${selected}`);
                console.log(`wrong counter is: ${wrong}`);
                console.log(`correct counter is: ${correctCount}`);

                //initiate validation process
                checkSelected();
                checkCorrectNo();

                if(selected === correctCount && selected !== 0 && wrong === 0) {
                    resetCounter();
                    model.score++;

                    //render question related information
                    elem.info.innerHTML =
                        `<h2 class="green bold">Correct</h2>
                         <p>${model.quizArray[model.counter].info}</p>`;

                    toggleButtons();
                    renderScore();
                } else {
                    //render question related information
                    elem.info.innerHTML =
                        `<h2 class="red bold">Incorrect</h2>
                         <p>${model.quizArray[model.counter].info}</p>`;

                    toggleButtons();
                    resetCounter();
                }
                //render only available amount of questions/quiz
                console.log(`counter is: ${model.counter}`);
                console.log(`score is: ${model.score}`);

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