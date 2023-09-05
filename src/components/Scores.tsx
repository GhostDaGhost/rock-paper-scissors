import { Box, Typography } from "@mui/material";

// SCORES
export default ({ myScore, computerScore }: ScoresProps) => {
    return (
        <Box className="mt-6 px-5 py-3 rounded bg-gray-400">
            <Box>
                <Typography className="text-center !font-poppins">
                    Scores
                </Typography>
            </Box>

            <Box className="flex justify-between">
                <Box className="p-2 rounded bg-green-600">
                    <Typography className="text-white !font-poppins">
                        Me: {myScore}
                    </Typography>
                </Box>

                <Box className="p-2 rounded bg-green-600">
                    <Typography className="text-white !font-poppins">
                        CPU: {computerScore}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
