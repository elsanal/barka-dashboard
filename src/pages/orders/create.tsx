// src/pages/orders/create.tsx
import { Create, useForm } from "@refinedev/antd";
import { Form, Input, InputNumber, Select } from "antd";

export const OrdersCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Customer Name" name={["customer", "name"]} rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Customer Phone" name={["customer", "phone"]} rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Products" name={["customer", "products"]} rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Customer Email" name={["customer", "email"]} rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Total Amount" name="total" rules={[{ required: true }]}>
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Status" name="status" rules={[{ required: true }]}>
          <Select
            options={[
              { value: "received", label: "Order Received" },
              { value: "paid", label: "Payment Made" },
              { value: "processing", label: "Processing" },
              { value: "shipped", label: "Shipped" },
              { value: "delivered", label: "Delivered" },
            ]}
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
