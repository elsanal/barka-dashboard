import React from "react";
import { Form, Input, Button, Space, Upload, InputNumber, Select } from "antd";
import { PlusOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";

interface Props {
  selectedCategory: string;
}

const Transport: React.FC<Props> = ({ selectedCategory }) => {
  if (selectedCategory !== "transport") return null;

  return (
    <>
      <Form.Item label="Vehicle Variants (Model, Engine, Color)">
        <Form.List name="variants">
          {(fields, { add, remove }) => (
            <>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Vehicle Variant
              </Button>
              {fields.map(({ key, name, ...rest }) => (
                <Space key={key} align="baseline" style={{ display: "flex", marginTop: 16 }}>
                  <Form.Item {...rest} name={[name, "model"]}>
                    <Input placeholder="Model (e.g. Keke 200cc, Bajaj RE)" />
                  </Form.Item>
                  <Form.Item {...rest} name={[name, "engineCapacity"]}>
                    <Input placeholder="Engine (e.g. 200cc, 2.0L)" />
                  </Form.Item>
                  <Form.Item {...rest} name={[name, "color"]}>
                    <Input placeholder="Color" />
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

export default Transport;
