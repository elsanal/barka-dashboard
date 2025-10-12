// src/pages/users/list.tsx
import { List, ShowButton, EditButton, useTable, DeleteButton } from "@refinedev/antd";
import { Table } from "antd";

export const UsersList = () => {
  const { tableProps } = useTable({
    resource: "users", // Ensure this matches your Supabase table name
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id" loading={tableProps.loading}>
        <Table.Column title="ID" dataIndex="id" />
        <Table.Column title="Name" dataIndex="full_name" />
        <Table.Column title="Username" dataIndex="username" />
        <Table.Column title="Phone" dataIndex="phone" />
        <Table.Column title="Email" dataIndex="email" />
        <Table.Column title="Role" dataIndex="role" />
        <Table.Column
          title="Actions"
          render={(_, record: any) => (
            <>
              <ShowButton recordItemId={record.id} />
              <EditButton recordItemId={record.id} />
              <DeleteButton recordItemId={record.id} />
            </>
          )}
        />
      </Table>
    </List>
  );
};
