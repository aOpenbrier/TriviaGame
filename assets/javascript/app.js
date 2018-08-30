//array of question objects
let questions = [
    {
        question: 'What is Anya most afraid of?',
        choices: ['Bunnies', 'Humans', 'Slayers', 'Spike'],
        correctIndex: 0, //index of correct choice
        isCorrect: false, //player selected correct answer
    },
    {
        question: 'How many times does Buffy Die',
        choices: ['3', '2', '1', 'none'],
        correctIndex: 1,
        isCorrect: false,
    },
    {
        question: 'Which actress plays Willow?',
        choices: ['Charisma Carpenter', 'Rose McGowen', 'Fairuza Balk', 'Alyson Hannigan'],
        correctIndex: 3,
        isCorrect: false,
    },
    {
        question: 'How many seasons of Buffy aired',
        choices: ['5', '6', '7', '8'],
        correctIndex: 2,
        isCorrect: false,
    },
    {
        question: 'What was the favorite hangout spot of Sunnydale teens?',
        choices: ['The Dungeon', 'Starbucks', 'The Bronze', 'The Brass'],
        correctIndex: 2,
        isCorrect: false,
    },
]

//Question in view
let activeQIndex = -1

//Next question timer
var nextTimer
function nextQuestion() {
    console.log('next question in 10 seconds')
    clearTimeout(nextTimer)
    nextTimer = setTimeout(askQ, 3000)
}
clearTimeout(nextTimer)
//question response timer
let counter = 15
var countdownTimer
function questionTimer() {
    clearInterval(countdownTimer)
    countdownTimer = setInterval(countdown, 1000)
}
clearInterval(countdownTimer)
function countdown() {
    console.log('counting down')
    if (counter > 0) {
        $('#seconds').text(counter)
        counter--
    }
    else {
        $('#seconds').text('0')
        
        $('#answer').html('<h2>Time is up!</h2>')
        check(-1)
    }
}

//onclick start button
$('#start').on('click', function () {
    console.log('clicked on start button')
    newGame()
})

//onclick choice class
$(document).on('click', '.choice', function () {
    // variable of this's value attribute parsed to int
    var selected = parseInt($(this).attr('data-choiceIndex'))
    console.log('clicked a choice with index: ' + selected)
    // check func (pass selected choice)
    $('#answer').empty()
    check(selected)
})

//newGame func
function newGame() {
    console.log('new game func')
    //start button display none
    $('#start').css('display', 'none')
    $('#question').css('visibility', 'visible')
    questions.forEach(function (question) {
        question.isCorrect = false
    })
    activeQIndex = -1
    askQ()
}


//ask question func
function askQ() {
    console.log('ask func')
    //if activeQindex < questions.length
    if (activeQIndex < questions.length - 1) {
        //add 1 to activeQI
        activeQIndex++
        //set question timer
        $('#countdown').css('visibility', 'visible')
        counter = 10
        questionTimer()
        //ask the question
        $('#question').html(`<h2>${questions[activeQIndex].question}</h2>`)
        //for each loop of question.choices array
        $('#answer').empty()
        questions[activeQIndex].choices.forEach(function (choice, choiceIndex) {
            //display choice as div, add class "choice" value of .choices' index
            $('#answer').append(`<h2 class='choice' data-choiceIndex='${choiceIndex}'>${choice}</h2>`)
        })
    }
    else { //no questions remain    
        //run end game func
        endGame()
    }
}

//Check func (pass selected choice)
function check(selection) {
    console.log('check func')
    //clear interval timer
    $('#countdown').css('visibility', 'hidden')
    clearInterval(countdownTimer)
    //set answer display timer
    nextQuestion()
    //is selected index same as correctIndex of questions[active Q index]
    if (selection === questions[activeQIndex].correctIndex) {
        console.log('correct index is ' + questions[activeQIndex].correctIndex)
        //set iscorrect to true
        questions[activeQIndex].isCorrect = true
        //display congrats message and correct answer
        $('#answer').html(`<h2>${questions[activeQIndex].choices[questions[activeQIndex].correctIndex]}</h2>`)
        $('#answer').append('<h2>Correct!</h2>')
    }
    else {
        //display sorry message and correct answer
        $('#answer').append('<h2>Sorry, the correct answer was</h2>')
        $('#answer').append(`<h2>${questions[activeQIndex].choices[questions[activeQIndex].correctIndex]}</h2>`)
    }
}

//End Game func
function endGame() {
    console.log('end game func')
    $('#question').css('visibility', 'hidden')
    //count correct answers
    var numCorrect = 0
    questions.forEach(function (question) {
        if (question.isCorrect = true) {
            numCorrect++
        }
    })
    //display number of correct answer
    $('#answer').html(`<h3>You got ${numCorrect} correct</h3>`)
    //change start button text to "start over"
    $('#start').text('Start Over')
    //start button display block
    $('#start').css('display', 'block')
}