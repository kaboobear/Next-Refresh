import { Box, Button, Container, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { CreateItem } from "../../components/CreateItem/CreateItem";

export default function NewPostPage() {
  return (
    <>
      <Head>
        <title>Create New Post</title>
      </Head>

      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="subtitle1">Create Article</Typography>
        <Button
          LinkComponent={Link}
          href="/news"
          variant="outlined"
          sx={{ mb: 2 }}
        >
          Back
        </Button>
      </Box>
      <CreateItem />
    </>
  );
}
