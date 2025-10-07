import React from "react";
import { Form, Input, Button, Space, Upload, InputNumber } from "antd";
import { PlusOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";

interface Props {
  selectedCategory: string;
}

const Others: React.FC<Props> = ({ selectedCategory }) => {
  if (selectedCategory !== "others") return null;

  return (
    <>
      <Form.Item label="Other Products (Flexible Details)">
        <Form.List name="variants">
          {(fields, { add, remove }) => (
            <>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Product Variant
              </Button>

              {fields.map(({ key, name, ...rest }) => (
                <Space
                  key={key}
                  align="baseline"
                  style={{ display: "flex", marginTop: 16 }}
                >
                  <Form.Item {...rest} name={[name, "attribute"]}>
                    <Input placeholder="Attribute (e.g. Model, Style, Grade)" />
                  </Form.Item>

                  <Form.Item {...rest} name={[name, "description"]}>
                    <Input placeholder="Short Description" />
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
                    style={{ color: "red", cursor: "pointer" }}
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

export default Others;
