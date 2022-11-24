import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ApiResponseItem } from "../../types/api-response-item";
import { NewsItem } from "../../types/news-item.interface";

interface Props {
  item: NewsItem;
}

export default function NewsItemPage(props: Props) {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>News Item {query.newsId}</title>
      </Head>

      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="subtitle1">{props.item.title}</Typography>
        <Button
          LinkComponent={Link}
          href="/news"
          variant="outlined"
          sx={{ mb: 2 }}
        >
          Back
        </Button>
      </Box>
      <Typography variant="body1">{props.item.description}</Typography>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<{ newsId: string }> = async () => {
  const result = await fetch("http://localhost:3000/api/news");
  const data = (await result.json()) as ApiResponseItem[];
  const items = data.splice(0, 5);

  return {
    fallback: false,
    paths: items.map((item) => ({ params: { newsId: String(item.id) } })),
  };
};

export const getStaticProps: GetStaticProps<Props, { newsId: string }> = async (
  context
) => {
  const result = await fetch("http://localhost:3000/api/news");
  const data = (await result.json()) as ApiResponseItem[];
  const newsId = Number(context?.params?.newsId);

  const item = data.splice(0, 5).filter((item) => item.id === newsId)[0];

  return {
    props: {
      item: {
        id: item.id,
        title: item.name.split(" ")[0],
        description: item.name,
      },
    },
  };
};
