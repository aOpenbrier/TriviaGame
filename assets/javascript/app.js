//array of question objects
    // question
    // choices
    // correct index
    //iscorrect false
//activeQIndex = -1

//variable = interval func
        //if > 0 seconds remaining
            // display seconds remaining
            // deduct a second
        // else
            // call check func (pass -1)
//clear question timer

//onclick start button
    //newGame func

//onclick choice class
    // variable of this's value attribute parsed to int
    // check func (pass selected choice)

//newGame func
    //start button display none
    //for each questions, reset all isCorrect to false

    //Ask func
    //clear answer display timer
    //if activeQindex < questions.length
        //add 1 to activeQI
        //set question timer
        //for each loop of question.choices array
        //display choice as div, add class "chioce" value of .choices' index
    //else run end game func

//Check func (pass selected choice)
    //clear interval timer
    //set answer display timer
    //is selected index same as correctIndex of questions[active Q index]
        //set iscorrect to true
        //display 'congrats', and correct answer
    //else
        //display 'sorry', and correct answer

//End Game func
    //for each questions
        //count correct answers
    //display number of correct answer
    //change start button text to "start over"
    //start button display block