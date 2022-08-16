import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const PopoverItem = ({ itemName, currentTarget, events: { closeHandler } }) => {
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const isOpen = !!popoverAnchorEl;

  useEffect(() => {
    if (currentTarget) {
      setPopoverAnchorEl(currentTarget);
    } else {
      setPopoverAnchorEl(null);
    }
  }, [currentTarget]);

  return (
    <Popover
      id={`Popover-${itemName}`}
      open={isOpen}
      style={{ pointerEvents: "none" }}
      anchorEl={popoverAnchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center"
      }}
      onClose={closeHandler}
      disableRestoreFocus
    >
      <Typography style={{ padding: 10 }}>{itemName}</Typography>
    </Popover>
  );
};

PopoverItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  currentTarget: PropTypes.object,
  events: PropTypes.shape({
    closeHandler: PropTypes.func.isRequired
  }).isRequired
};

PopoverItem.defaultProps = {
  currentTarget: null
};

export default PopoverItem;
