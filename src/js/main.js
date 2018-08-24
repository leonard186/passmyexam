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
        'By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?',
        'Television',
        'Radio',
        'Internet',
        'Newspapers',
        [1,1, 0, 0],
        'By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to rival viewpoints.'
    ),
    new Quiz(
        'Where is the official residence of the Prime Minister?',
        'London Tower',
        'Windsor Castle',
        'Buckingham Palace',
        '10 Downing Street',
        [0, 0, 0, 1],
        '10 Downing Street is the official office and home residence of the U.K. Prime Minister'
    ),
    new Quiz(
        'Which industries were badly affected during the 1930\'s Great Depression?',
        'Vehicle Manufacturing',
        'Electrical Engineering',
        'Shipbuilding',
        'Agriculture',
        [0, 0, 1, 0],
        'One of the most affected industries during the 1930\'s Great Depression was shipbuilding'
    ),
    new Quiz(
        'Cardiff is the capital city of:',
        'England',
        'Wales',
        'Ireland',
        'Scotland',
        [0, 1, 0, 0],
        'In 1905, Cardiff was made a city and proclaimed the Capital of Wales in 1955'
    ),
    new Quiz(
        'The Crown Jewels are kept at',
        'Her Majesty’s Exchequer',
        'Buckingham Palace',
        'Tower of London',
        'Big Ben',
        [0, 0, 1, 0],
        'The Crown Jewels are kept at the Tower of London'
    ),

    new Quiz(
        'The last successful foreign invasion of Britain that took place in 1066 was:',
        'Spanish Armada',
        'Caesar\'s invasion',
        'The Norman Conquest',
        'The Anglo-Saxon invasion',
        [0, 0, 1, 0],
        'The Norman conquest of England under William the Conqueror at the Battle of Hastings'
    ),
    new Quiz(
        'Which of the following is a public holiday in Northern Ireland',
        'St George\'s day',
        'St Patrick\'s day',
        'St David\'s day',
        'St Andrew\'s day',
        [0, 1, 0, 0],
        'Only Scotland and Northern Ireland have their patron saint’s day as an official holiday (although in Scotland not all businesses and offices will close)'
    ),
    new Quiz(
        'What is a bank holiday?',
        'A public holiday when banks and many other businesses are closed for the day',
        'A holiday when only banks are closed',
        'A holiday for public sector workers',
        'A holiday which everyone living in the U.K. must have',
        [1, 0, 0, 0],
        'In the United Kingdom and Ireland a bank holiday is a public holiday, when banks and many other businesses are closed for the day'
    ),
    new Quiz(
        'How is a jury selected?',
        'From the electoral register in alphabetical order',
        'Randomly from the telephone directory',
        'From the postcode lottery',
        'Randomly from the electoral register',
        [0, 0, 0, 1],
        'The jurors’ names are selected from the electoral register. This is an automatic process, randomly done by a computer at a central office'
    ),
    new Quiz(
        'William Shakespeare was the author of which play?',
        'The Clandestine Marriage',
        'A Midsummer Night’s dream',
        'The Daughter-in-Law',
        'The Wonder of Women',
        [0, 1, 0, 0],
        'A Midsummer Night\'s Dream is a comedy written by William Shakespeare in 1595/96'
    ),
    new Quiz(
        'Northern Ireland has its own banknotes, where are they valid?',
        'Only in Northern Ireland',
        'Only in Northern Ireland and England',
        'Only in Northern Ireland and Scotland',
        'Everywhere in the UK',
        [0, 0, 0, 1],
        'Northern Ireland has its own banknotes, which are valid everywhere in the UK'
    ),
    new Quiz(
        'Who is the author of Sherlock Holmes?',
        'Sir Arthur Conan Doyle',
        'Charles Dickens',
        'J. R. R. Tolkien',
        'George Orwell',
        [1, 0, 0, 0],
        'Sherlock Holmes is a fictional private detective created by British author Sir Arthur Conan Doyle'
    ),
    new Quiz(
        'In which country is Snowdonia located?',
        'Scotland',
        'England',
        'Wales',
        'Northern Ireland',
        [0, 0, 1, 0],
        'Snowdonia is a region in northwest Wales concentrated around the mountains and glacial landforms of massive Snowdonia National Park'
    ),
    new Quiz(
        'Which two houses form the UK Parliament?',
        'House of Lords',
        'House of the Royal Society',
        'House of Commons',
        'House of Cards',
        [1, 0, 1, 0],
        'The UK Parliament is composed of two houses; the House of Commons and the House of Lords.'
    ),
    new Quiz(
        'Who was voted the Greatest Briton in 2002?',
        'Isambard Kingdom Brunel',
        'Winston Churchill',
        'Diana, Princess of Wales',
        'Charles Darwin',
        [0, 1, 0, 0],
        'A poll conducted by BBC in 2002 resulted in Winston Churchill being voted as the Greatest Briton'
    ),
    new Quiz(
        'The National Citizen Service programme is: ',
        'Compulsory for 16 and 17-year-olds to join',
        'Optional for 16 and 17-year-olds to join',
        'An opportunity to enjoy outdoor activities, develop skills and take part in a community project',
        'Available for any age group',
        [0, 1, 1, 0],
        'The National Citizen Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project. Therefore, it is optional.'
    ),
    new Quiz(
        'If you think someone is trying to persuade you to join an extremist or terrorist activity, who should you contact?',
        'Your local police force',
        'National Counter Terrorism Security Office',
        'Council Office',
        'The Home Office',
        [1, 0, 0, 0],
        'If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify your local police force.'
    ),
    new Quiz(
        'In what year did Ireland become a republic?',
        '1925',
        '1939',
        '1949',
        '1927',
        [0, 0, 1, 0],
        'Ireland became a republic in 1949.'
    ),
    new Quiz(
        'Women over the age of 30 were given the right to vote as a result of their contribution towards the war effort. Which war was that?',
        'The First World War',
        'The Second World War',
        'The Irish War of Independence',
        'The Great Northern War',
        [1, 0, 0, 0],
        'In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.'
    ),
    new Quiz(
        'Where is the United Kingdom geographically located?',
        'North-West of Europe',
        'South-West of Europe',
        'North-East of Europe',
        'South-East of Europe',
        [1, 0, 0, 0],
        'The United Kingdom is a sovereign state located off the North-Western coast of continental Europe.'
    ),
    new Quiz(
        'When were men and women given the right to vote at the age of 21?',
        '1918',
        '1926',
        '1928',
        '1930',
        [0, 0, 1, 0],
        'The 1928 \'Representation of the People\' Act widened suffrage by giving women electoral equality with men. It gave the vote to all women over 21 years old, regardless of property ownership. '
    ),
    new Quiz(
        'Which of the following is TRUE regarding St Helena:',
        'is an independent state',
        'is part of the EU',
        'is part of the UK',
        'is a British overseas territory',
        [0, 0, 0, 1],
        'St Helena is a British overseas territory but is not part of the UK'
    ),
    new Quiz(
        'What is the Home Secretary responsible for?',
        'Law',
        'Finance',
        'Education',
        'Policing',
        [0, 0, 0, 1],
        'The Home Secretary is responsible for crime, policing and immigration'
    ),
    new Quiz(
        'Which of the following is a fundamental British value:',
        'Individual liberty',
        'Traditional Culture',
        'Harmony',
        'Self Development',
        [1, 0, 0, 0],
        'The Fundamental British Values are Democracy, Rule of Law, Respect and Tolerance, Individual Liberty.'
    ),
];

var quiz2 = [
    new Quiz(
        'question 1',
        'correct answer1',
        'wrong answer2',
        'wrong answer1',
        'correct answer2',
        [1, 0, 0, 1],
        'just because'
    ),
    new Quiz(
        'question 2',
        'correct answer3',
        'wrong answer4',
        'wrong answer5',
        'correct answer2',
        [1, 0, 0, 1],
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
        timerCount: 0,
        timeRemaining: 2700,

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

        countDownTimer: function() {
            var renderElem = this.getID('count-down');
            renderElem.innerHTML = convert(model.timeRemaining - model.timerCount);

            //formats any single digit to double digits
            function format(n) {
                return (n < 10 ? '0' : '') + n;
            }

            //converts 60 seconds to 1 minute
            function convert(sec) {
                var minutes = Math.floor( sec / 60);
                var seconds = sec % 60;
                return `${format(minutes)} min : ${format(seconds)} sec`;
            }

            //set the interval for every 1 second
            var interval = setInterval(timing, 1000);

            //increment timer
            function timing() {
                model.timerCount++;
                renderElem.innerHTML = convert(model.timeRemaining - model.timerCount);
                if(model.timeRemaining === model.timerCount) {
                    model.getID('quiz-layout').style.display = 'none';
                    model.getID('finished').style.display = 'block';
                    model.getID('final-score').innerHTML =
                        `<h3 class="red bold">Failed! Time is up ...</h3> 
                         <p>The time limit is  <span class="bold green">45 minutes</span></p>
                         <p>So far you scored <span class="bold">${model.score}</span>  
                         out of <span class="bold">${model.quizArray.length}</span> 
                         (<span class="red bold">${model.scorePercentage()}%</span>)</p>`;
                    model.timerCount = 0;
                    clearInterval(interval);
                }
            }
        },
    }

})();

//user interface controller
var view = (function (){

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
        quizCount: model.getID('quiz-count')
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

    //when this function is called it will display final results tot he DOM
    var renderScore = function() {
        var percentageScore = model.scorePercentage();
        if( percentageScore >= 75) {
            return elem.finalScore.innerHTML =
                `<h3 class="green bold">Passed</h3>
                <p>Your scored <span class="bold">${model.score}</span> out of 
                <span class="bold">${model.quizArray.length}</span> 
                (<span class="green bold">${percentageScore}%</span>)</p>`;
        }  else {
            return elem.finalScore.innerHTML =
                `<h3 class="red bold">Failed!</h3> 
                <p>The pass rate is <span class="bold green">75%</span> or higher</p>
                <p>You scored <span class="bold">${model.score}</span>  
                out of <span class="bold">${model.quizArray.length}</span> 
                (<span class="red bold">${percentageScore}%</span>)</p>`;
        }
    };

    return {

        //render the quiz to the dom with appropriate logic
        generateQuiz: function(chooseQuiz) {
            //initiate quiz array
            model.getArray(chooseQuiz);

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
                //console.log(`good counter is: ${selected}`);
                //console.log(`wrong counter is: ${wrong}`);
                //console.log(`correct counter is: ${correctCount}`);

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
                    renderScore();
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

    var initiateQuiz = function(quiz) {
        var quizModal = document.getElementById('quiz');
        var closeButton = document.getElementById('close');
        closeButton.onclick = function() {
            location.reload();
        };
        view.generateQuiz(quiz);
        quizModal.style.display = "block";
    };

    var renderQuizOnClick = function() {


        model.getID('btn-1').addEventListener('click', function() {
            initiateQuiz(quiz1);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 1';
            model.getID('finished-btn').innerHTML += ' 1';
        });

        model.getID('btn-2').addEventListener('click', function() {
            initiateQuiz(quiz2);
            model.countDownTimer();
            model.getID('quiz-name').innerHTML += ' 2';
            model.getID('finished-btn').innerHTML += ' 2';
        });
    };


    return {
        init: function(){
            renderQuizOnClick();
            view.finished();
        }
    }

})(model,view);

controller.init();