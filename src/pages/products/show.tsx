// src/pages/products/show.tsx
import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Table, Divider } from "antd";

const { Title, Text } = Typography;

export const ProductsShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  if (isLoading) return <div>Loading...</div>;
  if (!record) return <div>No product data found.</div>;

  return (
    <Show>
      <Title level={4}>Product Details</Title>
      <Text strong>Name:</Text> {record.name} <br />
      <Text strong>Price:</Text> ${record.price} <br />
      <Text strong>Stock:</Text> {record.stock} <br />

      <Divider />

      <Title level={5}>Variants</Title>
      <Table
        dataSource={record.variants || []}
        rowKey={(row: { color: string; size: string }) => `${row.color}-${row.size}`}
        pagination={false}
        columns={[
          { title: "Color", dataIndex: "color" },
          { title: "Size", dataIndex: "size" },
          { title: "Stock", dataIndex: "stock" },
        ]}
      />

      <Divider />

      <Title level={5}>Options</Title>
      <Table
        dataSource={record.options || []}
        rowKey={(row: { name: string }) => row.name}
        pagination={false}
        columns={[
          { title: "Option", dataIndex: "name" },
          { title: "Value", dataIndex: "value" },
        ]}
      />
    </Show>
  );
};
