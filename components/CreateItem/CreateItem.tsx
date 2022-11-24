import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { NewsItemForm } from "../../types/news-item.interface";

export const CreateItem = () => {
  const [item, setItem] = useState<NewsItemForm>({
    title: "",
    description: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form data", item);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem((prevItem) => ({
      ...prevItem,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoComplete="title"
          autoFocus
          onChange={onChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          name="description"
          label="Description"
          id="description"
          onChange={onChange}
          autoComplete="current-description"
          sx={{ mb: 2 }}
        />
        <Button type="submit" fullWidth size="large" variant="contained">
          Create
        </Button>
      </Box>
    </Box>
  );
};
