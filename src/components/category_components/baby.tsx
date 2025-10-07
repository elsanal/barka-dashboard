import React from "react";
import { Form, Input, Button, Space, Upload, InputNumber } from "antd";
import { PlusOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";

interface Props {
  selectedCategory: string;
}

const BabyProducts: React.FC<Props> = ({ selectedCategory }) => {
  if (selectedCategory !== "baby_products") return null;

  return (
    <>
      <Form.Item label="Baby Product Variants (Size, Color, Weight)">
        <Form.List name="variants">
          {(fields, { add, remove }) => (
            <>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Variant
              </Button>
              {fields.map(({ key, name, ...rest }) => (
                <Space key={key} align="baseline" style={{ display: "flex", marginTop: 16 }}>
                  <Form.Item {...rest} name={[name, "size"]}>
                    <Input placeholder="Size (e.g. Small, Medium, Large)" />
                  </Form.Item>
                  <Form.Item {...rest} name={[name, "color"]}>
                    <Input placeholder="Color" />
                  </Form.Item>
                  <Form.Item {...rest} name={[name, "weight"]}>
                    <Input placeholder="Weight (e.g. 500g)" />
                  </Form.Item>
                  <Form.Item
                    {...rest}
                    name={[name, "image"]}
                    valuePropName="fileList"
                    getValueFromEvent={(e) => e.fileList}
                  >
                    <Upload listType="picture" maxCount={1}>
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item {...rest} name={[name, "price"]}>
                    <InputNumber min={0} placeholder="Price" />
                  </Form.Item>
                  <DeleteOutlined onClick={() => remove(name)} style={{ color: "red" }} />
                </Space>
              ))}
            </>
          )}
        </Form.List>
      </Form.Item>
    </>
  );
};

export default BabyProducts;
