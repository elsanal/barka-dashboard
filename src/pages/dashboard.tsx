// src/pages/dashboard.tsx
import { useList } from "@refinedev/core";
import { Card, Table, Typography, Row, Col } from "antd";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const { Title, Text } = Typography;

export const Dashboard = () => {
  // Fetch data with refine hooks
  const { data: usersData } = useList({ resource: "users" });
  const { data: productsData } = useList({ resource: "products" });
  const { data: ordersData } = useList({ resource: "orders", pagination: { pageSize: 5 } });

  const users = usersData?.data ?? [];
  const products = productsData?.data ?? [];
  const orders = ordersData?.data ?? [];

  // Example sales data for chart (you can replace with backend API)
  const salesData = [
    { month: "Jan", revenue: 1200 },
    { month: "Feb", revenue: 2100 },
    { month: "Mar", revenue: 800 },
    { month: "Apr", revenue: 1600 },
    { month: "May", revenue: 2400 },
  ];

  const totalRevenue = orders.reduce((sum, order) => sum + (order.total || 0), 0);

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>Dashboard</Title>

      {/* Stats Cards */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={6}>
          <Card>
            <Title level={4}>Users</Title>
            <Text>{users.length}</Text>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Title level={4}>Products</Title>
            <Text>{products.length}</Text>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Title level={4}>Orders</Title>
            <Text>{orders.length}</Text>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Title level={4}>Revenue</Title>
            <Text>${totalRevenue}</Text>
          </Card>
        </Col>
      </Row>

      {/* Sales Chart */}
      <Card style={{ marginBottom: 24 }}>
        <Title level={4}>Monthly Sales</Title>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#1890ff" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Recent Orders */}
      <Card>
        <Title level={4}>Recent Orders</Title>
        <Table rowKey="id" dataSource={orders} pagination={false}>
          <Table.Column title="Order ID" dataIndex="id" />
          <Table.Column title="Customer" dataIndex={["customer", "name"]} />
          <Table.Column title="Total" dataIndex="total" />
          <Table.Column title="Status" dataIndex="status" />
        </Table>
      </Card>
    </div>
  );
};
