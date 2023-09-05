import { Box, Typography } from "@mui/material";

// HEADER
export default () => {
    return (
        <Box className="text-center">
            <Typography variant="h4" className="!font-poppins">
                Rock Paper Scissors
            </Typography>

            <Typography variant="subtitle1" className="!font-poppins">
                Created by Alexander Arizola
            </Typography>
        </Box>
    )
}
