// src/pages/products/list.tsx
import { List, EditButton, ShowButton, DeleteButton } from "@refinedev/antd";
import { Table, Space } from "antd";
import { useList } from "@refinedev/core";

export const ProductsList = () => {
  const { data, isLoading, error } = useList({
    resource: "products",
  });

  console.log(data, isLoading, error);

  return (
    <List>
      <Table rowKey="id" dataSource={data?.data}>
        <Table.Column title="Name" dataIndex="name" />
        <Table.Column title="Price" dataIndex="base_price" />
        <Table.Column title="Promo" dataIndex="promo_price" />
        <Table.Column
          title="Actions"
          render={(_, record: any) => (
            <Space>
              <EditButton recordItemId={record.id} />
              <ShowButton recordItemId={record.id} />
              <DeleteButton recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
