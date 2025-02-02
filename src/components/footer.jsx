import { Box, Typography } from "@mui/material";
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LayersIcon from '@mui/icons-material/Layers';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Box
            border={"1px solid white"}
            borderRadius={"1rem"}
            width={"100%"}
            sx={{
                marginTop: "auto", // Keeps footer at the bottom of the container
                marginTop: "1rem"
            }}
        >
            <Box display={"grid"}
                gridTemplateColumns={"repeat(4, 1fr)"}
                gap={2} p={1}
                sx={{ placeItems: "center" }}
            >
                <Link to={"/"}><CloudCircleIcon color="primary" /></Link>
                <Link to={"/search"}><FormatListBulletedIcon color="primary" /></Link>
                <Link to={"/"}><LayersIcon color="primary" /></Link>
                <Link to={"/search"}><MailOutlineIcon color="primary" /></Link>
            </Box>
        </Box>
    );
}

export default Footer;
