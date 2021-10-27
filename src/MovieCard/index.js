import { string, number } from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import useStyles from "./useStyles";
import { Link } from "react-router-dom";

export default function MovieCard({
  title,
  image = "https://via.placeholder.com/350*210?text=No%20Image%20Found",
  id,
}) {
  const classes = useStyles();

  return (
    <Card className={{ root: classes.root }}>
      <CardActionArea component={Link} to={`/movie/${id}`}>
        <CardMedia component="img" height="210" image={image} title="{title}" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
MovieCard.propTypes = {
  title: string.isRequired,
  id: number.isRequired,
  image: string,
};
