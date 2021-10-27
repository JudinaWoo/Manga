import { makeStyles } from "@material-ui/core/styles";
import { variants } from "./";

export default makeStyles({
  root: {
    marginLeft: "2rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  current: ({ variant }) => ({
    color: variant === variants.current ? "#f73378" : "inherit",
  }),
});
