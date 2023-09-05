import { Box } from "@mui/material";
import { choices } from "../data/consts";

import Choice from "./Choice";

// CHOICES
export default ({ onChoiceClick }: ChoicesProps) => {
    return (
        <Box className="mt-6 p-5 flex justify-between rounded bg-gray-400">
            {choices.map(choice => (
                <Choice key={choice} name={choice} onChoiceClick={onChoiceClick} />
            ))}
        </Box>
    )
}
