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
import Logo from "../../assets/Group 10684.png"
import Logo2 from "../../assets/Group 10686.png"

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

const SiteSection = () => {
  return (
    <>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "#F5F8FF",
            pt: 8,
            pb: 6,
          }}
        >
          <Stack direction={"row"}>
            <Grid container>
              <Grid Item sm={1} alignContent={"center"}>
                <Container></Container>
              </Grid>
              <Grid Item sm={3} alignContent={"center"}>
                <Container>
                  <Typography align="center">
                    {" "}
                    <p
                      style={{
                        fontWeight: "bolder",
                        marginBottom: "10px",
                        textAlign: "center",
                      }}
                    >
                      מערכת הצעות שמקפיצה את העסק שלך קדימהמערכת הצעות שמקפיצה
                      את העסק שלך קדימה
                    </p>
                    <p>
                      <Button variant="outlined" sx={{ borderRadius: 50 }}>
                        התחל בחינם
                      </Button>
                    </p>
                  </Typography>
                </Container>
              </Grid>
              <Grid Item sm={7} alignContent={"center"}> 
                <Container
                  
                >
                  <img src={Logo} width={700} />
                </Container>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </main>
    </>
  );
};
export default SiteSection;
