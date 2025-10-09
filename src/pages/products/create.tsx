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
import Electronics from "../../components/category_components/electronics";
import Foods from "../../components/category_components/foods";
import Clothes from "../../components/category_components/clothes";
import Furniture from "../../components/category_components/furniture";   
import Sports from "../../components/category_components/sports";
import Toys from "../../components/category_components/toys";
import Education from "../../components/category_components/education";
import Others from "../../components/category_components/others";
import Accessories from "../../components/category_components/accesoires";
import Beauty from "../../components/category_components/beauty";
import Health from "../../components/category_components/health";
import Construction from "../../components/category_components/construction";
import Transport from "../../components/category_components/transport";
import Telecom from "../../components/category_components/telecom";
import Travel from "../../components/category_components/travel";
import Household from "../../components/category_components/household";
import Stationery from "../../components/category_components/stationary";
import BabyProducts from "../../components/category_components/baby";
import Machinery from "../../components/category_components/machinery";


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
          label="Product Dedscription"
          name="description"
          rules={[{ required: false }]}
        >
          <Input placeholder="e.g. un telephone de haut gamme" />
        </Form.Item>

        <Form.Item
          label="Basic Price"
          name="base_price"
          rules={[{ required: true }]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Promo Price"
          name="promo_price"
          rules={[{ required: false }]}
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

        <Form.Item
          label="Tags"
          name="tags"
          rules={[{ required: false }]}
        >
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Add tags"
            tokenSeparators={[","]}
          />
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
        <Electronics selectedCategory={selectedCategory} />
        <Foods selectedCategory={selectedCategory} />
        <Clothes selectedCategory={selectedCategory} />
        <Accessories selectedCategory={selectedCategory} />
        <Beauty selectedCategory={selectedCategory} />
        <Health selectedCategory={selectedCategory} />  
        <Furniture selectedCategory={selectedCategory} />
        <Sports selectedCategory={selectedCategory} />
        <Toys selectedCategory={selectedCategory} />  
        <Education selectedCategory={selectedCategory} />
        <Others selectedCategory={selectedCategory} />
        <Construction selectedCategory={selectedCategory} />  
        <Transport selectedCategory={selectedCategory} />
        <Telecom selectedCategory={selectedCategory} />
        <Travel selectedCategory={selectedCategory} />
        <Household selectedCategory={selectedCategory} />
        <Stationery selectedCategory={selectedCategory} />
        <BabyProducts selectedCategory={selectedCategory} />
        <Machinery selectedCategory={selectedCategory} />
      </Form>
    </Create>
  );
};
