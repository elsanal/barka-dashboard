// src/pages/products/list.tsx
import { List, EditButton, ShowButton } from "@refinedev/antd";
import { Table, Space } from "antd";

export const ProductsList = () => {
  return (
    <List>
      <Table rowKey="id">
        <Table.Column title="Name" dataIndex="name" />
        <Table.Column title="Price" dataIndex="price" />
        <Table.Column title="Stock" dataIndex="stock" />

        {/* Variants count */}
        <Table.Column
          title="Variants"
          dataIndex="variants"
          render={(variants: any[]) => variants?.length || 0}
        />

        {/* Options count */}
        <Table.Column
          title="Options"
          dataIndex="options"
          render={(options: any[]) => options?.length || 0}
        />

        <Table.Column
          title="Actions"
          render={(_, record: any) => (
            <Space>
              <EditButton recordItemId={record.id} />
              <ShowButton recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
