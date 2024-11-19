import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UploadOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";

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
      <Input
        placeholder={"Product title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input.TextArea
        placeholder={"Product Description"}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        type={"number"}
        placeholder={"Product Price"}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <Select
        placeholder={"Product Category"}
        value={categoryId}
        onChange={(value) => setCategoryId(value)}
        options={categoriesData.data.map((item) => ({
          value: item.id,
          label: item.name,
        }))}
      />
      <FileInput
        onFileSelected={fileSelect}
        trigger={
          <Button style={{ width: "100%" }} icon={<UploadOutlined />}>
            Upload
          </Button>
        }
      />
      <Button onClick={onAddNewProduct} type={"primary"} disabled={isDisabled}>
        Add product
      </Button>
    </div>
  );
};
