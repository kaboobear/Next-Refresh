import { Grid } from "@mui/material";
import { NewsItem as INewsItem } from "../../types/news-item.interface";
import { NewsItem } from "./components/NewsItem/NewsItem";

interface Props {
  newsItems: INewsItem[];
}

export const NewsList = ({ newsItems }: Props) => {
  return (
    <Grid container spacing={3}>
      {newsItems.map((item) => (
        <Grid key={item.id} item sm={4}>
          <NewsItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
