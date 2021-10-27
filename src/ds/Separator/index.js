import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Separator() {
  const classes = useStyles();
  return <div className={classes.grow} />;
}
