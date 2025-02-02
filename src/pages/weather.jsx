import { useState, useEffect } from "react";
import { Typography, Box, Button, LinearProgress } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Footer from "../components/footer";

const Weather = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [city, setCity] = useState('');
    const [data, setData] = useState({});
    const [temperatureCelsius, setTemperatureCelsius] = useState(null);
    const [loading, setLoading] = useState(true);  // Track loading state

    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';

    const query = new URLSearchParams(location.search).get('query');
    useEffect(() => {
        if (query) {
            setCity(query);
        }
    }, [query]);
    useEffect(() => {
        if (city) {
            fetchData();
        }
    }, [city]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            const result = await fetch(url);
            const json = await result.json();
            setData(json);
            const temperatureCelsius = (json?.main?.temp - 273.15).toFixed(2);
            setTemperatureCelsius(temperatureCelsius)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const sdata = [{
        time: "9:00 AM",
        temp: "21°C",
        img: <CircleIcon sx={{
            color: "yellow",
            borderRadius: "50%",
            height: "3rem",
            width: "3rem",
        }} />
    }, {
        time: "10:00 AM",
        temp: "19°C",
        img: <CircleIcon sx={{
            color: "yellow",
            borderRadius: "50%",
            height: "3rem",
            width: "3rem",
        }} />
    }, {
        time: "11:00 AM",
        temp: "20°C",
        img: <CircleIcon sx={{
            color: "yellow",
            borderRadius: "50%",
            height: "3rem",
            width: "3rem",
        }} />
    }];

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f0f0f0",
            }}
        >
            <Box
                sx={{
                    flex: 1, // Allow content to grow and take remaining space
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "16px",
                }}
            >
                {loading ? (
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "375px",
                            padding: "16px",
                            backgroundColor: "#001830",
                            color: "white",
                            borderRadius: "1rem",
                            display: "flex",
                            flexDirection: "column",
                        }}>
                        <Typography variant="h4" align="center" mt={4}>
                            <LinearProgress />
                            <Typography variant="h5" color="white" align="center" mt={4}>
                                Loading...
                            </Typography>
                        </Typography>
                    </Box>
                ) : data.name ? (
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "375px",
                            padding: "16px",
                            backgroundColor: "#001830",
                            color: "white",
                            borderRadius: "1rem",
                            display: "flex",
                            flexDirection: "column",
                        }}>
                        <Typography variant="h4" align="center" mt={4}>
                            {data.name}
                        </Typography>
                        <Typography variant="h6" align="center"
                            sx={{
                                fontSize: ".8rem",
                                color: '#d3d3d3',
                            }}>
                            Chance of rain: {data?.clouds?.all ?? 'N/A'}%
                        </Typography>
                        <Box display={"flex"} gap={2} mt={3}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <CircleIcon sx={{
                                color: "yellow",
                                borderRadius: "50%",
                                height: "5rem",
                                width: "5rem",
                            }} />
                            <Typography variant="h4" align="center" mt={2}>
                                {temperatureCelsius}°C
                            </Typography>
                        </Box>
                        <Box display={"flex"} gap={2} mt={3}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            <Typography variant="h4" align="center">
                                {data?.weather?.[0]?.main ?? 'No data'}
                            </Typography>
                        </Box>
                        <Box border={"2px solid white"} mt={10} borderRadius={"1rem"}
                            sx={{
                                padding: "1rem 0rem",
                                paddingBottom: "2rem",
                            }}>
                            <Typography variant="h4" m={1}
                                sx={{
                                    fontSize: ".8rem",
                                    color: '#d3d3d3',
                                }}>
                                Today's Forcast</Typography>
                            <Box
                                display={'grid'}
                                gridTemplateColumns={'repeat(3,1fr)'}
                                gap='10px'
                            >
                                {sdata.map((item) => (
                                    <Box
                                        key={item.time}
                                        borderLeft={"1px solid white"}
                                        borderRight={"1px solid white"}
                                        display={'flex'}
                                        flexDirection={'column'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        gap={.5}
                                    >
                                        <Typography variant="h4" align="center"
                                            sx={{ fontSize: ".7rem" }}>{item.time}</Typography>
                                        {item.img}
                                        <Typography variant="h4" align="center"
                                            sx={{ fontSize: ".7rem" }}>{item.temp}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box><Box sx={{ marginTop: "auto" }}>
                            <Footer />
                        </Box>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "375px",
                            height: "90%",
                            padding: "16px",
                            backgroundColor: "#001830",
                            color: "white",
                            borderRadius: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <WarningAmberIcon
                            sx={{
                                fontSize: "5rem",
                                color: "yellow",
                                mb: 2,
                            }}
                        />
                        <Typography variant="h4" sx={{ mb: 1 }}>
                            Oops! No Data Found
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#d3d3d3",
                                maxWidth: "80%",
                            }}>
                            It looks like we couldn't fetch the weather data for your search. Please check your City Name and try again later.
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => navigate('/search')} sx={{ mt: 2 }}>
                            Go Back
                        </Button>
                        <Box sx={{ marginTop: "auto", width: "100%" }}>
                            <Footer />
                        </Box>
                    </Box>
                )}
            </Box>


        </Box>
    );
}

export default Weather;
