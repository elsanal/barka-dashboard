import { Create, useForm } from "@refinedev/antd";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Space,
  Divider,
  Upload,
  Select,
} from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { categories } from "../../utility/categories";


export const ProductsCreate = () => {
  const { formProps, saveButtonProps } = useForm();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        {/* Required Fields */}
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input placeholder="e.g. iPhone 16 Pro" />
        </Form.Item>

        <Form.Item
          label="Basic Price"
          name="price"
          rules={[{ required: true }]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        {/* General Images */}
        <Form.Item
          label="General Images"
          name="images"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
        >
          <Upload.Dragger name="file" listType="picture" multiple>
            <UploadOutlined /> Click or drag to upload product images
          </Upload.Dragger>
        </Form.Item>

        {/* Category & Type */}
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select category"
            options={Object.keys(categories).map((c) => ({
              label: c,
              value: c,
            }))}
            onChange={(value) => setSelectedCategory(value)}
          />
        </Form.Item>

        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select type"
            disabled={!selectedCategory}
            options={categories[selectedCategory]?.map((t) => ({
              label: t,
              value: t,
            }))}
          />
        </Form.Item>

        <Divider />

        {/* Electronics */}
        {selectedCategory === "electronics" && (
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
        )}

        {/* Clothes */}
        {selectedCategory === "clothes" && (
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
        )}

        {/* Foods */}
        {selectedCategory === "foods" && (
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
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Weight (e.g. 500g, 1kg)" />
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
        )}
      </Form>
    </Create>
  );
};
