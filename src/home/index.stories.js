import { Typography } from "@material-ui/core";
import BaseLayout from "../ds/BaseLayout";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

export default function HomePage() {
  return (
    <BaseLayout>
      <Card>
        <CardMedia image=".jpg" title="Titanic" />
        <Typography gutterBottom variant="h5" component="h2">
          Titanic
        </Typography>
      </Card>
    </BaseLayout>
  );
}
