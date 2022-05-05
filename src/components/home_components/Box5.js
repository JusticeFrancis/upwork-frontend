import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import group from "../../assets/Group 4364.png"
import icon1 from "../../assets/1.png";
import icon2 from "../../assets/2.png"
import icon3 from "../../assets/3.png"
import icon4 from "../../assets/4.png"
import vector from "../../assets/Vector 1578.png";
import vector2 from "../../assets/Group 10663.png";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

const SiteSectionFifth = () => {
  return (
    <>
      <main>
        {/* Hero unit */}
        <Box
        style={{ backgroundImage: vector }}
          sx={{
            bgcolor: "#F5F8FF",
            pt: 8,
            pb: 6,
          }}
        >
          <Stack direction={"row"}>
            <Grid container>
              <Grid Item sm={3} alignContent={"center"}>
               <img src={vector2} width={750}/>
                
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </main>
    </>
  );
};
export default SiteSectionFifth;
