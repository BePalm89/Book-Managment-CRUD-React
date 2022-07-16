import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { Menu } from "antd";
import { BookOutlined, FileAddOutlined } from "@ant-design/icons";
import "./Navbar.css";
import ListBook from "../listBook/ListBook";
import NewBook from "../newBook/NewBook";

const Navbar = () => {
  return (
    <Router>
      <Menu
        mode="horizontal"
        className="centerItem"
        defaultSelectedKeys={["book"]}
      >
        <Menu.Item key="book" icon={<BookOutlined />}>
          You library
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="addBook" icon={<FileAddOutlined />}>
          Add book
          <Link to="/add" />
        </Menu.Item>
      </Menu>

      <Switch>
        <Route exact path="/">
          <ListBook />
        </Route>
        <Route path="/add">
          <NewBook />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
