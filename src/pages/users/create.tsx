// src/pages/users/create.tsx
import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const UsersCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item label="Role" name="role" rules={[{ required: true }]}>
          <Select
            options={[
              { value: "admin", label: "Admin" },
              { value: "staff", label: "Staff" },
              { value: "customer", label: "Customer" },
            ]}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
