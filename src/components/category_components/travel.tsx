import React from "react";
import { Form, Input, Button, Space, Upload, InputNumber } from "antd";
import { PlusOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";

interface Props {
  selectedCategory: string;
}

const Travel: React.FC<Props> = ({ selectedCategory }) => {
  if (selectedCategory !== "travel") return null;

  return (
    <>
      <Form.Item label="Travel Product Variants (Type, Material, Size)">
        <Form.List name="variants">
          {(fields, { add, remove }) => (
            <>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Travel Item
              </Button>
              {fields.map(({ key, name, ...rest }) => (
                <Space
                  key={key}
                  align="baseline"
                  style={{ display: "flex", marginTop: 16 }}
                >
                  <Form.Item {...rest} name={[name, "type"]}>
                    <Input placeholder="Type (e.g. Luggage, Backpack, Travel Adapter)" />
                  </Form.Item>

                  <Form.Item {...rest} name={[name, "material"]}>
                    <Input placeholder="Material (e.g. Leather, Fabric, Polycarbonate)" />
                  </Form.Item>

                  <Form.Item {...rest} name={[name, "size"]}>
                    <Input placeholder="Size (e.g. 20-inch, Medium)" />
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

                  <DeleteOutlined
                    onClick={() => remove(name)}
                    style={{ color: "red" }}
                  />
                </Space>
              ))}
            </>
          )}
        </Form.List>
      </Form.Item>
    </>
  );
};

export default Travel;
