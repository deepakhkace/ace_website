import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
//import { Popover } from "react-tiny-popover";
import Dropdown from "../dropdown/Dropdown";
// import Dropdown from "../dropdown/Dropdown";
import Popover from "react-tiny-popover";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "Left",
  },
  MuiButtonroot: {
    backgroundColor: "#6ebe6e",
  },
}));

export default function AppHeader() {
  const classes = useStyles();
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  return (
    <div className={classes.root}>
      <AppBar position="static" color="black" backgroundColor="white">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}

          <Typography variant="h5" className={classes.title}>
            Ace Analytics
          </Typography>
          {/* <Popover
            isOpen={isPopoverOpen}
            positions={["bottom"]}
            padding={10}
            onClickOutside={() => setIsPopoverOpen(false)}
            content={
              <div>
                <Dropdown />
              </div>
            }
          >
            <div className="nav-text-block-menu">Clients Detail</div>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </Popover> */}
          <div className="nav-text-block-menu">Clients Detail</div>
          <ArrowDropDownIcon></ArrowDropDownIcon>
          <Button className={classes.MuiButtonroot}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
