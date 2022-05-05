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
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import Logo from "../../assets/logo-05 1.png"

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

const Footer = () => {
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
              <Grid
                Item
                sm={12}
                alignContent={"center"}
                style={{ backgroundColor: "darkblue" }}
              >
                <Container>
                  <Stack direction={"row"}>
                    <Grid sm={3} direction={"column"}>
                      <Container>
                        <Grid color={"white"} sx={{ fontSize: 30 }}>
                          ור קש
                        </Grid>
                        <Grid color={"white"} sx={{ fontSize: 30 }}>
                          ור קש
                        </Grid>
                        <Grid color={"white"} sx={{ fontSize: 30 }}>
                          ור קשר קש
                        </Grid>
                        <Grid color={"white"} sx={{ fontSize: 30 }}>
                          ור קש
                        </Grid>
                      </Container>
                    </Grid>
                    <Grid sm={3} direction={"column"}>
                      <Container>
                        <Grid color={"white"} sx={{ fontSize: 30 }}>
                          ור קש
                        </Grid>
                        <Grid color={"white"} sx={{ fontSize: 30 }}>
                          ור קש
                        </Grid>
                        <Grid color={"white"} sx={{ fontSize: 30 }}>
                          ור קשר קש
                        </Grid>
                        <Grid color={"white"} sx={{ fontSize: 30 }}>
                          ור קש
                        </Grid>
                      </Container>
                    </Grid>
                    <Grid sm={3} direction={"column"}>
                      <Container style={{ marginTop: '20px' }}>
                        <Grid color={"white"} sx={{ fontSize: 30 }}>
                          <Button
                            variant="contained"
                            sx={{
                              mx: 1,
                              backgroundColor: "white",
                              color: "darkblue",
                              fontWeight: "bolder",
                              fontSize: 14,
                              borderRadius: "50px",
                            }} /* endIcon={<SendIcon />} */
                          >
                            התחל בחינם
                          </Button>
                        </Grid>
                        <Grid color={"white"} sx={{ fontSize: 30 }}>
                          <Button
                            variant="outlined"
                            sx={{
                              mx: 1,
                              fontSize: 14,
                              borderRadius: "50px",
                              color: "white",
                              fontWeight: "bolder",
                              border : '2px solid white'
                            }} /* endIcon={<SendIcon />} */
                          >
                            התחל בחינם
                          </Button>
                        </Grid>
                        <Grid color={"white"} sx={{ fontSize: 30, m:1 }} justifyContent={'center'}>
                            <FacebookIcon style={{ fontSize:'35px' }} />
                            <InstagramIcon style={{ fontSize:'35px' }} />
                            <LinkedInIcon style={{ fontSize:'35px' }} />
                        </Grid>
                      </Container>
                    </Grid>
                    <Grid sm={3} direction={"column"}>
                      <Container style={{ marginTop: '20px' }}>
                        <img src={Logo} style={{ color: 'white' }} />
                      </Container>
                    </Grid>
                  </Stack>
                </Container>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </main>
    </>
  );
};
export default Footer;
