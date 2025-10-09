import React from "react";
import { Form, Button, Space, Upload, Select, InputNumber } from "antd";
import { PlusOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";

interface ElectronicsProps {
  selectedCategory: string;
}

const Electronics: React.FC<ElectronicsProps> = ({ selectedCategory }) => {
  if (selectedCategory !== "electronics") {
    return null;
  }

  // Predefined options for memory, RAM, OS, and colors
  const memoryOptions = ["32GB", "64GB", "128GB", "256GB", "512GB", "1TB"];
  const ramOptions = ["4GB", "8GB", "16GB", "32GB"];
  const osOptions = ["Android", "iOS", "Windows", "Linux", "macOS"];
  const colorOptions = [
    "Red",
    "Blue",
    "Green",
    "Black",
    "White",
    "Yellow",
    "Purple",
    "Gray",
    "Pink",
    "Orange",
    "Brown",
    "Cyan",
    "Magenta",
    "Lime",
    "Maroon",
    "Navy",
    "Olive",
    "Teal",
    "Silver",
    "Gold",
  ];

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
                    rules={[{ required: true, message: "Please select a color" }]}
                  >
                    <Select
                      placeholder="Select a color"
                      options={colorOptions.map((color) => ({
                        label: color,
                        value: color,
                      }))}
                    />
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
        <Select
          mode="multiple"
          placeholder="Select RAM options"
          options={ramOptions.map((ram) => ({ label: ram, value: ram }))}
        />
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
                    <Select
                      placeholder="Select memory size"
                      options={memoryOptions.map((memory) => ({
                        label: memory,
                        value: memory,
                      }))}
                    />
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
        <Select
          mode="multiple"
          placeholder="Select operating systems"
          options={osOptions.map((os) => ({ label: os, value: os }))}
        />
      </Form.Item>
    </>
  );
};

export default Electronics;
