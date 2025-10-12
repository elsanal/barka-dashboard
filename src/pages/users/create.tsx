// src/pages/users/create.tsx
import { Create, useForm } from "@refinedev/antd";
import { Button, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

type UserFormValues = {
  full_name?: string;
  username?: string;
  phone?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
  profil_pic?: any;
  role?: string;
};

export const UsersCreate = () => {
  const { formProps, saveButtonProps } = useForm<UserFormValues>();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form
        {...formProps}
        layout="vertical"
        onFinish={(values: UserFormValues) => {
          // Verify passwords match
          if (values.password !== values.confirm_password) {
            return Promise.reject({
              confirm_password: "Passwords do not match",
            });
          }

          // Remove confirm_password before submitting
          const { confirm_password, ...restValues } = values;
          return formProps.onFinish?.(restValues);
        }}
      >
        <Form.Item
          label="Full Name"
          name="full_name"
          rules={[{ required: true, message: "Full Name is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Username is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Phone number is required" },
            {
              pattern: /^\+226\d{8}$/,
              message: "Enter a valid Burkina Faso phone number (e.g. +22670123456)",
            },
          ]}
        >
          <Input
            addonBefore="+226"
            maxLength={12}
            placeholder="xxxxxxxx"
            onKeyUp={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </Form.Item>


        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, type: "email", message: "Valid email is required" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm_password"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Profile Picture"
          name="profil_pic"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
        >
          <Upload listType="picture" maxCount={1}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Role is required" }]}
        >
          <Select
            options={[
              { value: "vendor", label: "Vendor" },
              { value: "customer", label: "Customer" },
            ]}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
