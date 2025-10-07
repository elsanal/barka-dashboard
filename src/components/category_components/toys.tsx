import React from "react";
import { Form, Input, Button, Space, Upload, InputNumber, Select } from "antd";
import { PlusOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";

interface Props {
  selectedCategory: string;
}

const Toys: React.FC<Props> = ({ selectedCategory }) => {
  if (selectedCategory !== "toys") return null;

  return (
    <>
      <Form.Item label="Toys Variants (Age Range, Material, Type)">
        <Form.List name="variants">
          {(fields, { add, remove }) => (
            <>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Toy Variant
              </Button>

              {fields.map(({ key, name, ...rest }) => (
                <Space
                  key={key}
                  align="baseline"
                  style={{ display: "flex", marginTop: 16 }}
                >
                  <Form.Item {...rest} name={[name, "type"]}>
                    <Input placeholder="Type (e.g. Car, Doll, Puzzle)" />
                  </Form.Item>

                  <Form.Item {...rest} name={[name, "ageRange"]}>
                    <Select
                      placeholder="Age Range"
                      options={[
                        { label: "0-3 years", value: "0-3" },
                        { label: "4-7 years", value: "4-7" },
                        { label: "8-12 years", value: "8-12" },
                        { label: "13+ years", value: "13+" },
                      ]}
                    />
                  </Form.Item>

                  <Form.Item {...rest} name={[name, "material"]}>
                    <Input placeholder="Material (e.g. Plastic, Wood, Fabric)" />
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

export default Toys;
