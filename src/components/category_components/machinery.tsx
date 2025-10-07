import React from "react";
import { Form, Input, Button, Space, InputNumber, Select } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

interface MachineryProps {
  selectedCategory: string;
}

const Machinery: React.FC<MachineryProps> = ({ selectedCategory }) => {
  if (selectedCategory !== "machinery") return null;

  return (
    <>
      <Form.Item label="Voltage Options">
        <Select mode="tags" placeholder="e.g. 110V, 220V, 380V" />
      </Form.Item>

      <Form.Item label="Power Options">
        <Select mode="tags" placeholder="e.g. 1HP, 5HP, 10HP" />
      </Form.Item>

      <Form.Item label="Size & Price">
        <Form.List name="sizes">
          {(fields, { add, remove }) => (
            <>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Size Option
              </Button>
              {fields.map(({ key, name, ...rest }) => (
                <Space key={key} style={{ display: "flex", marginTop: 16 }} align="baseline">
                  <Form.Item {...rest} name={[name, "size"]} rules={[{ required: true }]}>
                    <Input placeholder="e.g. Small, Medium, Large" />
                  </Form.Item>
                  <Form.Item {...rest} name={[name, "price"]} rules={[{ required: true }]}>
                    <InputNumber min={0} placeholder="Price" />
                  </Form.Item>
                  <DeleteOutlined onClick={() => remove(name)} style={{ color: "red", cursor: "pointer" }} />
                </Space>
              ))}
            </>
          )}
        </Form.List>
      </Form.Item>
    </>
  );
};

export default Machinery;
