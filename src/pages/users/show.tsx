// src/pages/users/show.tsx
import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title, Text } = Typography;

export const UsersShow = () => {
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  if (isLoading) return <div>Loading...</div>;

  if (!record) return <div>No user data found.</div>;

  return (
    <Show>
      <Title level={4}>User Profile</Title>
      <Text strong>ID:</Text> {record.id} <br />
      <Text strong>Name:</Text> {record.name} <br />
      <Text strong>Email:</Text> {record.email} <br />
      <Text strong>Role:</Text> {record.role} <br />
    </Show>
  );
};
