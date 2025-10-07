import React from "react";
import { Form, Input, Button, Space, Upload, InputNumber } from "antd";
import { PlusOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";

interface FurnitureProps {
  selectedCategory: string;
}

const Furniture: React.FC<FurnitureProps> = ({ selectedCategory }) => {
  if (selectedCategory !== "furniture") return null;

  return (
    <>
      <Form.Item label="Material Type" name="material">
        <Input placeholder="e.g. Wood, Metal, Plastic" />
      </Form.Item>

      <Form.Item label="Colors with Images">
        <Form.List name="colors">
          {(fields, { add, remove }) => (
            <>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Color
              </Button>
              {fields.map(({ key, name, ...rest }) => (
                <Space key={key} style={{ display: "flex", marginTop: 16 }} align="baseline">
                  <Form.Item {...rest} name={[name, "name"]} rules={[{ required: true }]}>
                    <Input placeholder="Color name" />
                  </Form.Item>
                  <Form.Item {...rest} name={[name, "image"]} valuePropName="fileList" getValueFromEvent={(e) => e.fileList}>
                    <Upload listType="picture" maxCount={1}>
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
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

export default Furniture;
