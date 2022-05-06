import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Body from "./layouts/Body";
import MenuListBar from "./layouts/MenuList";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Avatar, Chip, Grid } from "@mui/material";
import Alarm from "@mui/icons-material/Alarm";
import FaceIcon from "@mui/icons-material/Face";
import { makeStyles } from "@mui/styles";
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import ArchiveIcon from '@mui/icons-material/Archive';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';


const drawerWidth = 240;

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  paper: {
    background: "blue"
  },
  background: {
    background: "blue"
  }
});

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Box flexDirection={"row"}>
          <Stack direction={"row"}>
            <Toolbar>
             {/*  <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 1,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h6" style={{ fontSize: '25px' }} noWrap component="div">
                <span style={{ fontWeight:'bolder' }}>Company</span> Text
              </Typography>
              <Box display={"flex"}></Box>
            </Toolbar>
            <Grid
              variant="outlined"
             
              sx={{
                mx: 1,
                right: 8,
                mb: 4,
                position: "absolute",
                fontSize: 14,
              }} /* endIcon={<SendIcon />} */
            >
              <Stack direction="row" spacing={1} sx={{ mt: 2 }} >
                <Avatar sx={{ width: 30, height: 30 }} >
                  <Alarm />
                </Avatar>
                <Avatar sx={{ width: 30, height: 30}} >
                  <Alarm />
                </Avatar>
                <Avatar sx={{ width: 30, height: 30 }}>F</Avatar>
                <Typography component="h6">
  <Typography style={{ fontSize: 13 }} sx={{ width: 30, height: 30 }} variant="h6" component="h6">
  <span>name</span> <span style={{ color: 'green', border:'1px solid green', borderRadius: '5px', padding: '2px' }}>online</span>
</Typography>
</Typography>
              </Stack>
            </Grid>
          </Stack>
        </Box>
      </AppBar>
        <div style={{ backgroundColor: '#004E7A', height:'700px', marginTop:'60px' }}>

        <List>
          {["home", "permission", "employed", "archive","calendar", "settings"].map((text, index) => (
            <ListItemButton
              key={text}
              alignItems={'center'}
              sx={{
                minHeight: 48,
                justifyContent: 'center',
                margin:'10px',
                
              }}
            >
              <div>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index === 0 ? <MailIcon sx={{ fontSize: 30,color:'white' }} /> : null}
                {index === 1 ? <SecurityIcon sx={{ fontSize: 30,color:'white' }} /> : null}
                {index === 2 ? <GroupIcon sx={{ fontSize: 30,color:'white' }} /> : null}
                {index === 3 ? <ArchiveIcon sx={{ fontSize: 30,color:'white' }} /> : null}
                {index === 4 ? <CalendarTodayIcon sx={{ fontSize: 30,color:'white' }} /> : null}
                {index === 5 ? <SettingsIcon sx={{ fontSize: 30,color:'white' }} /> : null}
              </ListItemIcon>
              <p style={{ margin:'0px', textAlign:'center', fontSize:'8px', color:'white' }}>{text}</p>
              </div> 
            </ListItemButton>
          ))}
        </List>
        </div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Body />
      </Box>
    </Box>
  );
}
