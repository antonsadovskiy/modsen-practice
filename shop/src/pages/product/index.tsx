import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const params = useParams<{ id: string }>();

  return <div>{params?.id ?? ""}</div>;
};
