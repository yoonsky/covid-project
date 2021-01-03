import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const NormalLoginForm = () => {};
  return (
    <Form
      style={{
        width: "350px",
        margin: "auto",
        padding: "130px 30px",
      }}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={() => {}} //submit 버튼 클릭 시 발생하는 이벤트
    >
      <Typography.Title>Login</Typography.Title>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <div>
          <a href="">register now!</a>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
