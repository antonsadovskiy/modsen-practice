import { useNavigate } from "react-router-dom";

import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";

import { useDeleteProductMutation, useGetProductsQuery } from "@/api";
import { ProductType } from "@/api/types";
import { routes } from "@/constants/routes";

export const ProductsActionsPage = () => {
  const navigate = useNavigate();

  const { data } = useGetProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();

  const columns: ColumnsType<ProductType> = [
    {
      title: "Идентификатор",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Название",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Описание",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Цена",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Категория",
      dataIndex: "categoryName",
      key: "price",
    },
    {
      title: "Изображение",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <img
          alt={"image"}
          src={`http://localhost:9000/products/${image}`}
          style={{ width: "auto", height: "100px" }}
        />
      ),
    },
    {
      title: "Действия",
      key: "actions",
      width: "10%",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            onClick={() => deleteProduct(record.id)}
            type={"primary"}
            danger
          >
            Удалить
          </Button>
        </div>
      ),
    },
  ];

  const processedData = data?.data
    .map((item) => ({
      ...item,
      categoryName: item.category.name,
    }))
    .sort((a, b) => b.id - a.id);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        marginTop: "10px",
      }}
    >
      <Button
        style={{ width: "100%" }}
        onClick={() => navigate(routes.addNewProduct)}
      >
        Добавить новый продукт
      </Button>
      <Table
        pagination={{ pageSize: 10 }}
        style={{ width: "100%" }}
        dataSource={processedData}
        columns={columns}
      />
    </div>
  );
};
