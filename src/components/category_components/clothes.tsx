import React from "react";
import { Form, Button, Space, Input, Upload, InputNumber } from "antd";
import { PlusOutlined, UploadOutlined, DeleteOutlined } from "@ant-design/icons";



interface ClothesProps {
  selectedCategory: string;
}

const Clothes: React.FC<ClothesProps> = ({ selectedCategory }) => {
  if (selectedCategory !== "clothes") {
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

            {/* Sizes with price */}
            <Form.Item label="Sizes">
                <Form.List name="sizes">
                    {(fields, { add, remove }) => (
                        <>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                            >
                                Add Size
                            </Button>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    style={{ display: "flex", marginTop: 16 }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, "label"]}
                                        rules={[{ required: true }]}
                                    >
                                        <Input placeholder="Size (e.g. M, L, XL)" />
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
        </>
    );
};

export default Clothes;