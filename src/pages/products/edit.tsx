// src/pages/products/edit.tsx
import {
  Edit,
  useForm,
} from "@refinedev/antd";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Space,
  Divider,
} from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

export const ProductsEdit = () => {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        {/* Product Info */}
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Price" name="price" rules={[{ required: true }]}>
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Stock" name="stock" initialValue={0}>
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Divider />

        {/* Variants */}
        <h3>Variants</h3>
        <Form.List name="variants">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} align="baseline" style={{ display: "flex", marginBottom: 8 }}>
                  <Form.Item {...restField} name={[name, "color"]}>
                    <Input placeholder="Color" />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, "size"]}>
                    <Input placeholder="Size" />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, "stock"]}>
                    <InputNumber min={0} placeholder="Stock" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                  Add Variant
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Divider />

        {/* Options */}
        <h3>Options</h3>
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} align="baseline" style={{ display: "flex", marginBottom: 8 }}>
                  <Form.Item {...restField} name={[name, "name"]}>
                    <Input placeholder="Option Name" />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, "value"]}>
                    <Input placeholder="Option Value" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                  Add Option
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </Edit>
  );
};
