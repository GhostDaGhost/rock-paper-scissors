import { Box } from "@mui/material";
import { choiceClicked } from "./controllers/choiceClicked";
import { useState } from "react";

import Header from "./components/Header";
import Choices from "./components/Choices";
import Scores from "./components/Scores";
import Message from "./components/Message";

// APP
export default () => {
    const [myScore, setMyScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [currentMessage, setMessage] = useState('');

    // ON CHOICE CLICK
    const onChoiceClick = (myChoice: string) => choiceClicked(myChoice, myScore, setMyScore, computerScore, setComputerScore, setMessage);

    // RETURN ELEMENT
    return (
        <Box className="flex justify-center">
            <Box className="p-5 px-12 top-14 relative bg-gray-100 rounded">
                <Header />
                <Scores myScore={myScore} computerScore={computerScore} />
                <Choices onChoiceClick={onChoiceClick} />

                {currentMessage !== '' && <Message message={currentMessage} />}
            </Box>
        </Box>
    )
}
