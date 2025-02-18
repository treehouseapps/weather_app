import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import NearMeIcon from '@mui/icons-material/NearMe';
import Footer from "../components/footer";

const Search = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const data = [{
        name: "Madrid",
        temperature: 31,
        time: "10:33"
    },
    {
        name: "Barcelona",
        temperature: 28,
        time: "7:33"
    },
    {
        name: "Paris",
        temperature: 25,
        time: "9:33"
    }, ,
    {
        name: "Ethiopia",
        temperature: 37,
        time: "4:33"
    },
    {
        name: "London",
        temperature: 22,
        time: "5:33"
    }
    ]

    const submit = (e) => {
        e.preventDefault();
        navigate(`/weather?query=${search}`);
    };
    const use = (item) => {
        navigate(`/weather?query=${item}`);
    }
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                padding: "16px",
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
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="h5" fontWeight={"bold"}>
                    My Cities
                </Typography>
                <form onSubmit={submit}>
                    <Box display={"flex"} alignItems={"center"} gap={2}>
                        <TextField
                            placeholder="Search for cities"
                            variant="outlined"
                            margin="normal"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            sx={{
                                backgroundColor: "#363a45",
                                borderRadius: ".5rem",
                                color: "white",
                                "& .MuiOutlinedInput-root": {
                                    color: "white",
                                    height: "2.5rem",
                                    "& fieldset": {
                                        border: "none",
                                    },
                                    "& input": {
                                        letterSpacing: "0.1rem"
                                    }
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white",
                                },
                                "& .MuiInputBase-input::placeholder": {
                                    color: "white",
                                    opacity: 1
                                }
                            }}
                        />
                        <Button variant="outlined"
                            type="submit"
                            color="light"
                            sx={{
                                padding: ".5rem",
                                height: "2rem",
                                marginTop: ".5rem"
                            }}
                        >
                            Search
                        </Button>
                    </Box>
                </form>

                <Box flex="1" overflow="auto">
                    {data.map((item) => (
                        <Box
                            key={item.name}
                            sx={{
                                backgroundColor: "#363a45",
                                borderRadius: ".5rem",
                                padding: ".5rem 1rem",
                                margin: ".5rem",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                cursor: "pointer"
                            }
                            }
                            onClick={() => { use(item.name) }}
                        >
                            <Box>
                                <Typography display={"flex"}
                                    alignItems={"center"} gap={1}
                                    fontSize={"1rem"}
                                    fontWeight={"bold"}
                                    letterSpacing={".1rem"}>{item.name} <NearMeIcon fontSize={"small"} />
                                </Typography>
                                <Typography fontSize={".5rem"}>{item.time}</Typography>
                            </Box>
                            <Typography fontSize={"2rem"}
                                fontFamily={"sans-serif"}
                                fontWeight={"bold"}
                            >{item.temperature}°</Typography>
                        </Box>
                    ))}
                </Box>

                <Footer />
            </Box>
        </Box >
    );
}

export default Search;
