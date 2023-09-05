import { choices } from "../data/consts";

/**
    * A function that is triggered when any of the choices are clicked. It will generate a choice from the computer as well.
    * @param myChoice `string` - The choice of the player.
    * @param myScore `number` - The current score of the player.
    * @param setMyScore `Function` - The function to set the score of the player.
    * @param computerScore `number` - The current score of the computer.
    * @param setComputerScore `Function` - The function to set the score of the computer.
    * @param setMessage `Function` - The function to set the message in the game window on who won or lost.
    * @returns `void` - This returns nothing.
    * @example choiceClicked('Scissors', 3, setMyScore, 1, setComputerScore);
*/
export const choiceClicked = (
    myChoice: string,
    myScore: number,
    setMyScore: Function,
    computerScore: number,
    setComputerScore: Function,
    setMessage: Function
) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // IF THIS WAS A DRAW
    if (myChoice === "Rock" && computerChoice === "Scissors") {
        setMyScore(myScore + 1);
        setMessage('You won!');
    } else if (myChoice === "Rock" && computerChoice === "Paper") {
        setComputerScore(computerScore + 1);
        setMessage('You lost!');
    } else if (myChoice === "Scissors" && computerChoice === "Paper") {
        setMyScore(myScore + 1);
        setMessage('You won!');
    } else if (myChoice === "Scissors" && computerChoice === "Rock") {
        setComputerScore(computerScore + 1);
        setMessage('You lost!');
    } else if (myChoice === "Paper" && computerChoice === "Rock") {
        setMyScore(myScore + 1);
        setMessage('You won!');
    } else if (myChoice === "Paper" && computerChoice === "Scissors") {
        setComputerScore(computerScore + 1);
        setMessage('You lost!');
    } else {
        setMessage('It was a draw!');
    }
}
