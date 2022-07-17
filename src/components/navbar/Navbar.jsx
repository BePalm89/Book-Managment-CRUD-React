import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu } from "antd";
import { BookOutlined, FileAddOutlined } from "@ant-design/icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <Menu
        mode="horizontal"
        className="centerItem"
        defaultSelectedKeys={["book"]}
      >
        <Menu.Item key="book" icon={<BookOutlined />}>
          <Link to="/">You library</Link>
        </Menu.Item>
        <Menu.Item key="addBook" icon={<FileAddOutlined />}>
          <Link to="/add">Add book</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
