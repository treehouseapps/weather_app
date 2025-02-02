import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const umbrellaImg = '/umbrella.png';
import { Link } from 'react-router-dom';

function App() {

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
            }}
        >
            <Box
                sx={{
                    width: {
                        xs: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "375px",
                    },
                    maxWidth: "375px",
                    height: "90%",
                    padding: "16px",
                    backgroundColor: "#001830",
                    color: "white",
                    borderRadius: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <img
                        src={umbrellaImg}
                        alt="umbrella"
                        style={{
                            marginBottom: "1rem",
                            rotate: "35deg",
                        }}
                    />
                </Box>
                <Typography variant="h5" align="center" mt={5}
                    sx={{ fontSize: "3rem", fontWeight: "bold" }}>
                    Breeze
                </Typography>
                <Typography variant="h6" align="center"
                    sx={{ fontSize: "1.5rem", color: '#d3d3d3', fontWeight: "bold" }}>
                    Weather App
                </Typography>
                <Link to="/search">
                    <Button
                        variant="contained"
                        sx={{
                            mt: 10,
                            borderRadius: "50%",
                            minWidth: "56px",
                            width: "56px",
                            height: "56px",
                            padding: "0",
                            backgroundColor: "primary.main",
                        }}
                    >
                        <ArrowForwardIcon />
                    </Button>
                </Link>
            </Box>
        </Box >
    );
}

export default App;