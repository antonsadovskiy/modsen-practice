import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "antd";

import { useAddNewCategoryMutation } from "@/api";

export const AddNewCategoryPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [addNewCategory] = useAddNewCategoryMutation();

  const onAddNew = async () => {
    try {
      await addNewCategory({ name }).unwrap();
      navigate(-1);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        width: "400px",
        margin: "200px auto",
      }}
    >
      <Input
        placeholder={"Category name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button style={{ width: "100%" }} onClick={onAddNew}>
        Add new
      </Button>
    </div>
  );
};
