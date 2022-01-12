let btn  = document.getElementById('btn');
let output = document.getElementById('outputtext');
let number = [Math.floor(Math.random()*100)];
var guesscount=1;
btn.addEventListener('click',function()
{
    
    let input = document.getElementById('userInput').value;
if(isNaN(input))
{
    alert("ENTER ONLY NUMERIC VALUE");
}

    if(input==number)
    {
        output.innerHTML = "You guess a right number!!";
        output.style.backgroundColor = "green";
        setGameOver();
        
    }
    else if(input<number)
    {
        output.textContent = "You guess too small number!!";
        output.style.backgroundColor = "red";
        guesscount++;
    };
 if(input>number)
    {
        output.textContent = "You guess too large number!!";
        output.style.backgroundColor = "red";
        guesscount++;
    }
    if(guessCount==10)
    {
        output.textContent = "GAME OVER!!";
        output.style.backgroundColor = "red";
        setGameOver();
    }


});

function setGameOver()
{
    outputtext.disabled= true;
    userInput.disabled = true;
    resetButton  = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
}

function resetGame()
{
    guesscount = 1;
    resetButton.parentNode.removeChild(resetButton);
    userInput.disabled = false;
    btn.disabled = false;
    userInput.value  = ' ';
    userInput.focus();
    randomNumber = Math.floor(Math.random()*100)+1;

    
}
