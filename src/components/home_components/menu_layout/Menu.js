import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function MenuComponent() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: 'white' }}>
         <Box display={'flex'} justifyContent={'center'}>
        <Toolbar>
            <Typography variant="" color="blue" sx={{mx:1, fontSize: 14, }} noWrap>
            צור קש
          </Typography>
          <Typography variant="" color="black" sx={{mx:1, fontSize: 14}} noWrap>
          איך זה עובד?
          </Typography>
          <Typography variant="" color="black" sx={{mx:1, fontSize: 14}} noWrap>
          שירותים ומחירים
          </Typography>
          <Button variant="outlined" sx={{mx:1, fontSize: 14, borderRadius: '50px' }} /* endIcon={<SendIcon />} */>
          התחל בחינם
      </Button>
          <Button variant="contained" sx={{mx:1, fontSize: 14, borderRadius: '50px'}} /* endIcon={<SendIcon />} */>
          פרסם מכרז
      </Button>
        </Toolbar>
         </Box>
      </AppBar>
     
    </ThemeProvider>
  );
}