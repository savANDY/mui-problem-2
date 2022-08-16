import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import PopoverItem from "../Popover";
import "../style.scss";

const NormalItem = ({ text, icon, link, nested, isMenuOpen, classes }) => {
  const [popoverCurrentTarget, setPopoverCurrentTarget] = useState(null);

  const openPopover = e =>
    !isMenuOpen && setPopoverCurrentTarget(e.currentTarget);
  const closePopover = () => setPopoverCurrentTarget(null);

  return (
    <>
      <NavLink
        to={link}
        exact
        activeClassName="active-menu"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItem
          button
          className={classNames(
            { [classes.nested]: !!nested },
            { nested: !!nested }
          )}
          onMouseEnter={openPopover}
          onMouseLeave={closePopover}
        >
          <ListItemIcon className={classes.toolbarIcon}>
            <Icon className="icon material-icons-round">{icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={text} className="text" />
        </ListItem>
      </NavLink>
      {!nested && (
        <PopoverItem
          itemName={text}
          currentTarget={popoverCurrentTarget}
          events={{ closeHandler: closePopover }}
        />
      )}
    </>
  );
};

NormalItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  nested: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  classes: PropTypes.object.isRequired
};

NormalItem.defaultProps = {
  nested: false,
  isMenuOpen: null
};

export default NormalItem;
