import React from "react";
//import { Slide } from "material-auto-rotating-carousel";
//import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
const { red } = require("@material-ui/core/colors");
const { withStyles } = require("@material-ui/core/styles");

const styles = {
  root: {
    backgroundColor: red[600],
    // height: 400,
    //width: 800,
    width: "100%",
    height: "calc(100vh - 65px);",
  },
  media: {
    backgroundColor: red[400],
  },
};
// const StyledSlide = withStyles(styles)(Slide);
export default function AppSlider() {
  const [state, setState] = React.useState({ open: true });
  return (
    <div>
      {/* <AutoRotatingCarousel
        label="Get started"
        open={state.open}
        onClose={() => setState({ open: false })}
        onStart={() => setState({ open: false })}
        mobile
        autoplay={false}
        style={{ position: "absolute" }}
      >
        <StyledSlide
          media={
            <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
          }
          title="This is a very cool feature"
          subtitle="Just using this will blow your mind."
          mobile
          landscape
        />
        <StyledSlide
          media={
            <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
          }
          title="This is a very cool feature"
          subtitle="Just using this will blow your mind."
          mobile
          landscape
        />
        <StyledSlide
          media={
            <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
          }
          title="This is a very cool feature"
          subtitle="Just using this will blow your mind."
          mobile
          landscape
        />
      </AutoRotatingCarousel> */}
    </div>
  );
}
