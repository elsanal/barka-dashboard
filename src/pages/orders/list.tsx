// src/pages/orders/list.tsx
import { List, ShowButton, EditButton } from "@refinedev/antd";
import { Table } from "antd";

export const OrdersList = () => {
  return (
    <List>
      <Table rowKey="id">
        <Table.Column title="Order ID" dataIndex="id" />
        <Table.Column title="Customer" dataIndex={["customer", "name"]} />
        <Table.Column title="Email" dataIndex={["customer", "email"]} />
        <Table.Column title="Total" dataIndex="total" />
        <Table.Column title="Status" dataIndex="status" />
        <Table.Column
          title="Actions"
          render={(_, record: any) => (
            <>
              <ShowButton recordItemId={record.id} />
              <EditButton recordItemId={record.id} />
            </>
          )}
        />
      </Table>
    </List>
  );
};
