import Scissors from "./Scissors";
import Paper from "./Paper";
import Rock from "./Rock";

// CHOICES
const choices: any = {
    'Scissors': <Scissors />,
    'Rock': <Rock />,
    'Paper': <Paper />
};

// CHOICE
export default ({ name, onChoiceClick }: ChoiceProps) => {
    return (
        <div className="cursor-pointer transition hover:text-green-300" onClick={() => onChoiceClick(name)}>
            {choices[name]}
        </div>
    )
}
