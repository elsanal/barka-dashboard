import React from "react";
import { Form, Input, Button, Space, InputNumber } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

interface ConstructionProps {
  selectedCategory: string;
}

const Construction: React.FC<ConstructionProps> = ({ selectedCategory }) => {
  if (selectedCategory !== "building") return null;

  return (
    <>
      <Form.Item label="Dimensions & Price">
        <Form.List name="dimensions">
          {(fields, { add, remove }) => (
            <>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Dimension
              </Button>
              {fields.map(({ key, name, ...rest }) => (
                <Space key={key} style={{ display: "flex", marginTop: 16 }} align="baseline">
                  <Form.Item {...rest} name={[name, "size"]} rules={[{ required: true }]}>
                    <Input placeholder="e.g. 20x40cm" />
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

export default Construction;
