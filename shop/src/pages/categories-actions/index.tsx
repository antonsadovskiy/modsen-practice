import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Input, Table } from "antd";
import { ColumnsType } from "antd/es/table";

import { useEditCategoryMutation, useGetCategoriesQuery } from "@/api";
import { CategoryType } from "@/api/types";
import { routes } from "@/constants/routes";

export const CategoriesActionsPage = () => {
  const navigate = useNavigate();

  const [inEditMode, setInEditMode] = useState<number | undefined>();
  const [newName, setNewName] = useState("");

  const { data } = useGetCategoriesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data ?? { data: [] },
    }),
  });
  const [editCategory] = useEditCategoryMutation();

  const onEditCategory = async () => {
    try {
      await editCategory({ id: inEditMode, name: newName }).unwrap();

      setInEditMode(undefined);
      setNewName("");
    } catch (e) {
      console.error(e);
    }
  };

  const columns: ColumnsType<CategoryType> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "20%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "50%",
      render: (_, record) => {
        if (inEditMode === Number(record.id)) {
          return (
            <Input
              autoFocus
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          );
        } else {
          return record.name;
        }
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      width: "30%",
      render: (_, record) => {
        if (inEditMode === Number(record.id)) {
          return (
            <div style={{ display: "flex", gap: "10px" }}>
              <Button onClick={onEditCategory}>Save</Button>
              <Button onClick={() => setInEditMode(undefined)}>Cancel</Button>
            </div>
          );
        } else {
          return (
            <Button
              onClick={() => {
                setNewName(record.name);
                setInEditMode(Number(record.id));
              }}
            >
              Edit
            </Button>
          );
        }
      },
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "10px",
      }}
    >
      <Button onClick={() => navigate(routes.addNewCategory)}>
        Add new category
      </Button>
      <Table
        columns={columns}
        dataSource={[...data.data].sort((a, b) => b.id - a.id)}
      />
    </div>
  );
};
