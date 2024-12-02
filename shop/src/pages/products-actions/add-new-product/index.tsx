import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { useAddProductMutation, useGetCategoriesQuery } from "@/api";
import { FileInput } from "@/components/file-input";

export const AddNewProductPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState<number | undefined>();
  const [file, setFile] = useState<File | undefined>();

  const { data: categoriesData } = useGetCategoriesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data ?? { data: [] },
    }),
  });

  const fileSelect = (file: File) => {
    setFile(file);
  };

  const [addProduct] = useAddProductMutation();

  const onAddNewProduct = async () => {
    try {
      if (file) {
        await addProduct({
          title,
          categoryId,
          description,
          price,
          file,
        }).unwrap();

        navigate(-1);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const isDisabled = !title || !description || !price || !categoryId;

  return (
    <div
      style={{
        margin: "100px auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "400px",
      }}
    >
      <TextField
        label={"Product title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label={"Product Description"}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        type={"number"}
        label={"Product Price"}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          variant={"outlined"}
          value={categoryId}
          label="Category"
          onChange={(e) => {
            setCategoryId(Number(e.target.value));
          }}
        >
          {categoriesData.data.map((item, index) => (
            <MenuItem key={index} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FileInput
        onFileSelected={fileSelect}
        trigger={
          <Button variant={"outlined"} fullWidth>
            Upload
          </Button>
        }
      />
      <Button
        variant={"contained"}
        onClick={onAddNewProduct}
        disabled={isDisabled}
      >
        Add product
      </Button>
    </div>
  );
};
