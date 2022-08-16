import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Icon from "@material-ui/core/Icon";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import NormalItem from "../Normal";
import PopupItem from "../Popup";
import PopoverItem from "../Popover";
import "../style.scss";

const ParentItem = ({
  text,
  icon,
  childrenMenu,
  isMenuOpen,
  classes,
  location
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupCurrentTarget, setPopupCurrentTarget] = useState(null);
  const [popoverCurrentTarget, setPopoverCurrentTarget] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      setIsOpen(false);
    } else if (isActive) {
      setIsOpen(true);
    }
  }, [isMenuOpen, isActive]);

  useEffect(() => {
    if (childrenMenu && location) {
      const isActualLocation = childrenMenu.some(
        ({ link }) => link === location.pathname
      );
      if (isActualLocation) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [childrenMenu, location]);

  const toggleSubMenuHandler = e => {
    if (isMenuOpen) {
      setIsOpen(!isOpen);
    } else {
      setPopupCurrentTarget(e.currentTarget);
    }
  };

  const closePopup = () => setPopupCurrentTarget(null);
  const openPopover = e =>
    !isMenuOpen && setPopoverCurrentTarget(e.currentTarget);
  const closePopover = () => setPopoverCurrentTarget(null);

  return (
    <>
      <ListItem
        button
        onClick={toggleSubMenuHandler}
        onMouseEnter={openPopover}
        onMouseLeave={closePopover}
        className={isActive ? "active-menu" : ""}
      >
        <ListItemIcon className={classes.toolbarIcon}>
          <Icon className="icon">{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={text} className="text" />
        {isMenuOpen && (isOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {isMenuOpen && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {childrenMenu.map((val, index) => {
              const {
                text: textChildren,
                icon: iconChildren,
                link: linkChildren
              } = val;

              return (
                <NormalItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={`MCH-${index}-${text}`}
                  text={textChildren}
                  icon={iconChildren}
                  link={linkChildren}
                  nested
                  classes={classes}
                />
              );
            })}
          </List>
        </Collapse>
      )}
      {!isMenuOpen && (
        <>
          <PopupItem
            childrenMenu={childrenMenu}
            currentTarget={popupCurrentTarget}
            closePopup={closePopup}
          />
          <PopoverItem
            itemName={text}
            currentTarget={popoverCurrentTarget}
            events={{ closeHandler: closePopover }}
          />
        </>
      )}
    </>
  );
};

ParentItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  childrenMenu: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ),
  isMenuOpen: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

ParentItem.defaultProps = {
  childrenMenu: null,
  isMenuOpen: null
};

export default withRouter(ParentItem);
