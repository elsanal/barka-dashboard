import React from "react";
import { Form, Input, Button, Space, Upload, InputNumber } from "antd";
import { PlusOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";

interface Props {
  selectedCategory: string;
}

const Household: React.FC<Props> = ({ selectedCategory }) => {
  if (selectedCategory !== "household") return null;

  return (
    <>
      <Form.Item label="Color & Image Variants">
        <Form.List name="variants">
          {(fields, { add, remove }) => (
            <>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add Variant
              </Button>
              {fields.map(({ key, name, ...rest }) => (
                <Space key={key} align="baseline" style={{ display: "flex", marginTop: 16 }}>
                  <Form.Item {...rest} name={[name, "color"]}>
                    <Input placeholder="Color (e.g. Red, White)" />
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
                  <Form.Item {...rest} name={[name, "price"]} rules={[{ required: true }]}>
                    <InputNumber placeholder="Price" min={0} />
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

export default Household;
