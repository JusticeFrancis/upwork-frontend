import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import EnhancedTable from "./Table";
import Container from '@mui/material/Container';

const Body = () => {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  return (
    <>
      <DrawerHeader />
     <Container fixed>
     <Typography paragraph>
        <Grid container spacing={1}>
          <Grid item sm={3} xs={12}>
            <Card variant="outlined">
              <CardContent>
                <hr
                  style={{
                    backgroundColor: "green",
                    height: "4px",
                    borderRadius: "10px",
                  }}
                />
                <p style={{ color: "green", fontWeight: "bolder" }}>Manager</p>
                <p style={{ fontSize: "11px" }}>
                  {" "}
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim diam.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                </p>
                <Grid container paddingLeft={0} spacing={5}>
                  <Grid item sm={9}>
                    <AvatarGroup total={24}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar
                        alt="Agnes Walker"
                        src="/static/images/avatar/4.jpg"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="/static/images/avatar/5.jpg"
                      />
                    </AvatarGroup>
                  </Grid>
                  <Grid item sm={3} marginTop={1}>
                    <DriveFileRenameOutlineIcon />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card variant="outlined">
              <CardContent>
                <hr
                  style={{
                    backgroundColor: "purple",
                    height: "4px",
                    borderRadius: "10px",
                  }}
                />
                <p style={{ color: "purple", fontWeight: "bolder" }}>Admin</p>
                <p style={{ fontSize: "11px" }}>
                  {" "}
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim diam.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                </p>
                <Grid container paddingLeft={0} spacing={5}>
                  <Grid item sm={9}>
                    <AvatarGroup total={24}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar
                        alt="Agnes Walker"
                        src="/static/images/avatar/4.jpg"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="/static/images/avatar/5.jpg"
                      />
                    </AvatarGroup>
                  </Grid>
                  <Grid item sm={3} marginTop={1}>
                    <DriveFileRenameOutlineIcon />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card variant="outlined">
              <CardContent>
                <hr
                  style={{
                    backgroundColor: "darkorange",
                    height: "4px",
                    borderRadius: "10px",
                  }}
                />
                <p style={{ color: "darkorange", fontWeight: "bolder" }}>Welfare</p>
                <p style={{ fontSize: "11px" }}>
                  {" "}
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim diam.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                </p>
                <Grid container paddingLeft={0} spacing={5}>
                  <Grid item sm={9}>
                    <AvatarGroup total={24}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar
                        alt="Agnes Walker"
                        src="/static/images/avatar/4.jpg"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="/static/images/avatar/5.jpg"
                      />
                    </AvatarGroup>
                  </Grid>
                  <Grid item sm={3} marginTop={1}>
                    <DriveFileRenameOutlineIcon />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Card variant="outlined">
              <CardContent>
                <hr
                  style={{
                    backgroundColor: "darkblue",
                    height: "4px",
                    borderRadius: "10px",
                  }}
                />
                <p style={{ color: "darkblue", fontWeight: "bolder" }}>Recruiter</p>
                <p style={{ fontSize: "11px" }}>
                  {" "}
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim diam.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                </p>
                <Grid container paddingLeft={0} spacing={5}>
                  <Grid item sm={9}>
                    <AvatarGroup total={24}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                      <Avatar
                        alt="Agnes Walker"
                        src="/static/images/avatar/4.jpg"
                      />
                      <Avatar
                        alt="Trevor Henderson"
                        src="/static/images/avatar/5.jpg"
                      />
                    </AvatarGroup>
                  </Grid>
                  <Grid item sm={3} marginTop={1}>
                    <DriveFileRenameOutlineIcon />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
      </Typography>
      <Typography paragraph>
        
        <Grid container>
          <Grid item>
          <EnhancedTable />
          </Grid>
        </Grid>
      </Typography>
     </Container>
    </>
  );
};
export default Body;
