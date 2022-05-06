const ToolBarComponent = (props) => {
    const {handleDrawerOpen, Toolbar, IconButton, Typography, MenuIcon} = props
     return(
        <Toolbar>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
            }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
            Mini variant drawer
            </Typography>
      </Toolbar>
     )
}
export default ToolBarComponent