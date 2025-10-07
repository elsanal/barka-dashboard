import React from "react";
import { Form, Input, Button, Space, Upload, InputNumber } from "antd";
import { PlusOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";

interface Props {
  selectedCategory: string;
}

const Telecom: React.FC<Props> = ({ selectedCategory }) => {
  if (selectedCategory !== "telecom") return null;

  return (
    <>
      <Form.Item label="Telecom Accessory Variants (Type, Model)">
        <Form.List name="variants">
          {(fields, { add, remove }) => (
            <>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Telecom Product
              </Button>
              {fields.map(({ key, name, ...rest }) => (
                <Space key={key} align="baseline" style={{ display: "flex", marginTop: 16 }}>
                  <Form.Item {...rest} name={[name, "type"]}>
                    <Input placeholder="Type (e.g. Charger, Cable)" />
                  </Form.Item>
                  <Form.Item {...rest} name={[name, "model"]}>
                    <Input placeholder="Model (e.g. iPhone 13, Samsung)" />
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

export default Telecom;
