total = 0
ctotal = 0


alert(`Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer.

You will draw numbers 1 to 10. The computer will stop at 16.

Pay attention to the screen to see what your total is, and if you need another number, press 'y'.`)

alert(`Now... it is the computer's turn`)


do{
    score = 0 
    cscore = 0
    do{
    var ran = Math.floor(Math.random() * 10) + 1

    cscore = cscore + ran
    alert(`the computer rolled a ${ran}, the computers new score is ${cscore}`)
    if(cscore > 20){
        alert("the computer went over 20. you win!!")
        total++
        break
    }
    }while(cscore < 16)

    if (cscore <= 20) {

    
        alert("Now it's your turn")
    do{
            var ran = Math.floor(Math.random() * 10) + 1
            score = score + ran
            alert(`you rolled ${ran} your new score is ${score}`)
            if(score > 20){
                alert("you went over 20. you lose")
                ctotal++
                break
            }
            var question = prompt("do you want to roll again? (y) for yes (n) for no")
        }while(question == "y")

        if((cscore > score) && (score <= 20)){
            alert(`the computers score was ${cscore} and yours was ${score}. you lose`)
            ctotal++
        }else if ((score > cscore) && (score <= 20)){
            alert(`the computers score was ${cscore} and yours was ${score}. you win`)
            total++
        }else if(score == cscore){
        alert(`the computers score was ${cscore} and yours was ${score}. you tied`)
        }
    }
var again = prompt("do you want to play again?")
}while(again == "y")

if (total > ctotal) {
    alert(`You won with a final score of ${total} to ${ctotal}`)
}   else if (ctotal > total){
    alert(`The computer won with a final score of ${ctotal} to ${total}`)
}   else {
    alert(`You tied with the computer with a final score of ${total} to ${ctotal}`)
}

