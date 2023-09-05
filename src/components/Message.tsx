import { Box, Typography } from "@mui/material"

// MESSAGE
export default ({ message }: MessageProps) => {
    return (
        <Box className="mt-5">
            <Typography className="text-center !text-xl !font-poppins">
                {message}
            </Typography>
        </Box>
    )
}
