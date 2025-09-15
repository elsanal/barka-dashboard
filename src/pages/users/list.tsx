// src/pages/users/list.tsx
import { List, ShowButton, EditButton } from "@refinedev/antd";
import { Table } from "antd";

export const UsersList = () => {
  return (
    <List>
      <Table rowKey="id">
        <Table.Column title="ID" dataIndex="id" />
        <Table.Column title="Name" dataIndex="name" />
        <Table.Column title="Email" dataIndex="email" />
        <Table.Column title="Role" dataIndex="role" />
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
