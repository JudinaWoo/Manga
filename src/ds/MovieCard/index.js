import { string } from "prop-types";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
} from "@material-ui/core";

import useStyles from "./useStyles";
import { Link } from "react-router-dom";

export default function MovieCard({
  title,
  image = "https://via.placeholder.com/350x210?text=No%20Image%20Found",
  id,
}) {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.root }}>
      <CardActionArea component={Link} to={`/movie/${id}`}>
        <CardMedia component="img" height="210" image={image} title="{title}" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
}

MovieCard.propTypes = {
  title: string.isRequired,
  id: string.isRequired,
  image: string,
};
