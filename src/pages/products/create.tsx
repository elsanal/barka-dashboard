import {
  Create,
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

export const ProductsCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        {/* Product Basic Info */}
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input placeholder="E.g. T-Shirt" />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please enter price" }]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Stock" name="stock" initialValue={0}>
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Divider />

        {/* Product Variants */}
        <h3>Variants</h3>
        <Form.List name="variants">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} align="baseline" style={{ display: "flex", marginBottom: 8 }}>
                  <Form.Item
                    {...restField}
                    name={[name, "color"]}
                    rules={[{ required: true, message: "Enter color" }]}
                  >
                    <Input placeholder="Color (e.g. Red)" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "size"]}
                    rules={[{ required: true, message: "Enter size" }]}
                  >
                    <Input placeholder="Size (e.g. M)" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "stock"]}
                    rules={[{ required: true, message: "Enter stock" }]}
                  >
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

        {/* Product Options */}
        <h3>Options</h3>
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} align="baseline" style={{ display: "flex", marginBottom: 8 }}>
                  <Form.Item
                    {...restField}
                    name={[name, "name"]}
                    rules={[{ required: true, message: "Enter option name" }]}
                  >
                    <Input placeholder="Option Name (e.g. Material)" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "value"]}
                    rules={[{ required: true, message: "Enter option value" }]}
                  >
                    <Input placeholder="Option Value (e.g. Cotton)" />
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
    </Create>
  );
};
