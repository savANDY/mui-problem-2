import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import NormalItem from "./Normal";
import ParentItem from "./Parent";

const useStyle = makeStyles(theme => ({
  toolbarIcon: {
    marginLeft: theme.spacing(1)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const MenuItem = ({ text, icon, link, childrenMenu, isMenuOpen }) => {
  const classes = useStyle();
  return (
    <>
      {childrenMenu ? (
        <ParentItem
          text={text}
          icon={icon}
          childrenMenu={childrenMenu}
          isMenuOpen={isMenuOpen}
          classes={classes}
        />
      ) : (
        <NormalItem
          text={text}
          icon={icon}
          link={link}
          isMenuOpen={isMenuOpen}
          classes={classes}
        />
      )}
    </>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
  childrenMenu: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ),
  isMenuOpen: PropTypes.bool
};

MenuItem.defaultProps = {
  link: null,
  childrenMenu: null,
  isMenuOpen: null
};

export default MenuItem;
