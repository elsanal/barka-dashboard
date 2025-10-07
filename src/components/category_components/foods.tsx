import React from "react";
import { Form, Input, InputNumber, Button, Space } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

interface FoodsProps {
  selectedCategory: string;
}

const Foods: React.FC<FoodsProps> = ({ selectedCategory }) => {
  if (selectedCategory !== "foods") {
    return null;
  }    

    return (
        <Form.Item label="Weights">
            <Form.List name="weights">
                {(fields, { add, remove }) => (
                    <>
                        <Button
                            type="dashed"
                            onClick={() => add()}
                            block
                            icon={<PlusOutlined />}
                        >
                            Add Weight Option
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
                                    rules={[{ required: true, message: "Please input weight!" }]}
                                >
                                    <Input placeholder="Weight (e.g. 500g, 1kg)" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "price"]}
                                    rules={[{ required: true, message: "Please input price!" }]}
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
    );
};

export default Foods;