module.exports = {
  title: "Material-UI",
  outputPath: "./dist/playroom",
  components: "./playroom/components.js",
  themes: "./playroom/themes.js",
  frameComponent: "./playroom/FrameComponent.js",
  widths: [320, 375, 768, 1024],
  exampleCode: `
  <div style={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="Menu"
        style={{
          marginLeft: -12,
          marginRight: 20
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
</div>
<br />
<Button color="primary" variant="contained">
  Primary
</Button>
<Button color="secondary" variant="contained">
  secondary
</Button>

  `
};
