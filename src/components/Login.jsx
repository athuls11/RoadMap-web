import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      axios
        .post("user/login", {
          email: formData.email,
          password: formData.password,
        })
        .then((res) => {
          sessionStorage.setItem("token",res.data.accessToken)
          navigate("/home");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } catch (error) {
      console("Error fetching data:", error.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center !w-full !h-screen ">
      <Form
        name="normal_login"
        size="large"
        className="border-[1px] p-20 "
        initialValues={{
          remember: true,
        }}
        //   onFinish={onFinish}
      >
        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Item>

        <div className="flex flex-col gap-2 items-center">
          <Button
            onClick={handleSubmit}
            type="primary"
            htmlType="submit"
            className="!bg-[#004fbf] rounded-[5px] w-full"
          >
            Log in
          </Button>
          <div className="flex gap-1">
            <span>Not registered? </span>
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Login;
