import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NewsItem as INewsItem } from "../../../../types/news-item.interface";
import Link from "next/link";

interface Props {
  item: INewsItem;
}

export const NewsItem = ({ item }: Props) => {
  return (
    <Card sx={{ height: 1, display: "flex", flexDirection: "column" }}>
      <CardContent>
        <Typography variant="subtitle2">{item.title}</Typography>
        <Typography variant="body2">{item.description}</Typography>
      </CardContent>
      <CardActions sx={{ mt: "auto" }}>
        <Button size="small" LinkComponent={Link} href={`/news/${item.id}`}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
