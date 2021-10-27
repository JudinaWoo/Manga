import { node, oneOf, string } from "prop-types";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./useStyles";

export const variants = {
  default: "default",
  current: "current",
};

export { default as useVariantLocation } from "./useVariantLocation";

export default function MenuItem({
  children,
  startIcon,
  to,
  variant = variants.default,
}) {
  const classes = useStyles({ variant });

  return (
    <Button
      color="inherit"
      className={classes.current}
      classes={{ root: classes.root }}
      startIcon={startIcon}
      component={Link}
      to={to}
    >
      {children}
    </Button>
  );
}

MenuItem.propTypes = {
  children: node,
  startIcon: node,
  to: string.isRequired,
  variant: oneOf(Object.values(variants)),
};
