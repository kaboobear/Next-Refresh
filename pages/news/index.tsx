import { Box, Button, Typography } from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { NewsList } from "../../components/NewsList/NewsList";
import { ApiResponseItem } from "../../types/api-response-item";
import { NewsItem } from "../../types/news-item.interface";

interface Props {
  items: NewsItem[];
}

export default function NewsPage(props: Props) {
  return (
    <>
      <Head>
        <title>News List</title>
      </Head>

      <Box mb={2} display="flex" justifyContent="space-between">
        <Typography variant="subtitle1">News Page</Typography>
        <Button variant="contained" LinkComponent={Link} href="/new-post">
          Add Post
        </Button>
      </Box>
      <NewsList newsItems={props.items} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const result = await fetch("http://localhost:3000/api/news");
  const data = (await result.json()) as ApiResponseItem[];

  const items = data.splice(0, 5).map((item) => {
    return {
      id: item.id,
      title: item.name.split(" ")[0],
      description: item.name,
    };
  });

  return {
    props: {
      items,
    },
  };
};
