// src/pages/orders/show.tsx
import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Timeline, Divider } from "antd";

const { Title, Text } = Typography;

export const OrdersShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  if (isLoading) return <div>Loading...</div>;
  if (!record) return <div>No order data found.</div>;

  const statusSteps = [
    { key: "received", label: "Order Received" },
    { key: "paid", label: "Payment Made" },
    { key: "processing", label: "Processing" },
    { key: "shipped", label: "Shipped" },
    { key: "delivered", label: "Delivered" },
  ];

  return (
    <Show>
      <Title level={4}>Order #{record.id}</Title>
      <Text strong>Customer:</Text> {record.customer?.name} <br />
      <Text strong>Email:</Text> {record.customer?.email} <br />
      <Text strong>Total:</Text> ${record.total} <br />

      <Divider />

      <Title level={5}>Order Status</Title>
      <Timeline
        items={statusSteps.map((step) => ({
          children: step.label,
          color: step.key === record.status ? "blue" : "gray",
        }))}
      />
    </Show>
  );
};
