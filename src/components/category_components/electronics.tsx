import React from "react";
import { Form, Input, Button, Space, Upload, Select, InputNumber } from "antd";
import { PlusOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";

interface ElectronicsProps {
  selectedCategory: string;
}

const Electronics: React.FC<ElectronicsProps> = ({ selectedCategory }) => {
  if (selectedCategory !== "electronics") {
    return null;
  }

  return (
    <>
      {/* Colors with images */}
      <Form.Item label="Colors">
        <Form.List name="colors">
          {(fields, { add, remove }) => (
            <>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Color
              </Button>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginTop: 16 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "name"]}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="Color name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "image"]}
                    valuePropName="fileList"
                    getValueFromEvent={(e) => e.fileList}
                  >
                    <Upload listType="picture" maxCount={1}>
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
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

      {/* RAM */}
      <Form.Item label="RAM Options" name="ram">
        <Select mode="tags" placeholder="e.g. 4GB, 8GB, 16GB" />
      </Form.Item>

      {/* Memory with price */}
      <Form.Item label="Memory Options">
        <Form.List name="memory">
          {(fields, { add, remove }) => (
            <>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Memory Option
              </Button>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginTop: 16 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "size"]}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="e.g. 128GB" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "price"]}
                    rules={[{ required: true }]}
                  >
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

      {/* OS */}
      <Form.Item label="Operating Systems" name="os">
        <Select mode="tags" placeholder="e.g. Android, iOS, Windows" />
      </Form.Item>
    </>
  );
};

export default Electronics;
