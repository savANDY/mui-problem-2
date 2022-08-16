import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import MenuItem from "./MenuItem";
import { menuWidth } from "./elements";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: menuWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: menuWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflow: "hidden",
    width: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  toolbarHead: {
    width: "100%",
    paddingLeft: 16
  }
}));

const Menu = ({ state: { isOpen }, events: { closeMenu }, menuOptions }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen
        })
      }}
      open={isOpen}
    >
      <div className={classes.toolbar}>
        <Typography variant="h6" className={classes.toolbarHead}>
          Menu
        </Typography>
        <IconButton onClick={closeMenu}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      {menuOptions.map((val, index) => {
        const listItem = val.map((groupVal, indexItem) => {
          const { text, icon, link, children } = groupVal;

          return (
            <MenuItem
              // eslint-disable-next-line react/no-array-index-key
              key={`MI-${indexItem}-${text}`}
              text={text}
              icon={icon}
              link={link}
              childrenMenu={children}
              isMenuOpen={isOpen}
            />
          );
        });

        return (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`MG-${index}`}>
            <Divider />
            <List>{listItem}</List>
          </div>
        );
      })}
    </Drawer>
  );
};

Menu.propTypes = {
  state: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired
  }).isRequired,
  events: PropTypes.shape({
    closeMenu: PropTypes.func.isRequired
  }).isRequired,
  menuOptions: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        children: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
          })
        ),
        open: PropTypes.bool
      })
    )
  ).isRequired
};

export default Menu;
