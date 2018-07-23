import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

import {
  Button,
  InputBox,
  Form,
  Choice,
  Body,
  Main,
  Header
} from "./LoginPageCSS";

import Buttons from "../../components/Button";
import Input from "../../components/Input";
import EmailIcon from "../../image/ic-email.png";
import PasswordIcon from "../../image/ic-password.png";
import UserIcon from "../../image/ic-username.png";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      signup: true,
      email: "",
      password: "",
      username: "",
      isLogin: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  buttonClick(val) {
    const { login, signup } = this.state;
    if (val === "signup") {
      this.setState({
        signup: true,
        login: false
      });
    } else {
      this.setState({
        signup: false,
        login: true
      });
    }
  }

  onInput(state, e) {
    const { email, password, username } = this.state;
    this.setState({ [state]: e.target.value });
  }

  handleSubmit() {
    const { email, password, username } = this.state;
    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    if (!username) {
      //login
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      axios({
        method: "post",
        url: "http://dev3.apppartner.com/Reactors/scripts/user-login.php",
        data: formData,
        config
      })
        .then(res => {
          if (res) {
            swal({
              title: "Successfully Log In",
              icon: "success"
            }).then(() => {
              this.setState({ isLogin: true });
            });
            this.setState({ email: "", password: "", isLogin: false });
          }
        })
        .catch(err => {
          swal({
            title: `Somthing happend, ${err}`,
            icon: "warning"
          }).then(() => {
            this.setState({ email: "", password: "" });
          });
        });
    } else {
      //signup
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("username", username);
      axios({
        method: "post",
        url: "http://dev3.apppartner.com/Reactors/scripts/user-signup.php",
        data: formData,
        config
      })
        .then(res => {
          swal({
            title: "Successfully signup",
            icon: "success"
          }).then(() => {
            this.setState({ isLogin: true });
          });
          this.setState({
            email: "",
            password: "",
            username: "",
            isLogin: false
          });
        })
        .catch(err => {
          swal({
            title: "You are already signup",
            icon: "warning"
          }).then(() => {
            this.setState({
              email: "",
              password: "",
              username: "",
              signup: false,
              login: true
            });
          });
        });
    }
  }

  render() {
    const { email, password, username } = this.state;
    const Login = (
      <InputBox>
        <Input
          url={EmailIcon}
          placeholder={"reactor@apppartner.com"}
          onChange={this.onInput.bind(this, "email")}
          value={email}
        />
        <Input
          url={PasswordIcon}
          placeholder={"Password"}
          onChange={this.onInput.bind(this, "password")}
          value={password}
        />
        <Buttons name={"LOGIN"} onClick={this.handleSubmit} />
      </InputBox>
    );
    const Signup = (
      <InputBox>
        <Input
          url={UserIcon}
          placeholder={"Username"}
          onChange={this.onInput.bind(this, "username")}
          value={username}
        />
        <Input
          url={EmailIcon}
          placeholder={"reactor@apppartner.com"}
          onChange={this.onInput.bind(this, "email")}
          value={email}
        />
        <Input
          url={PasswordIcon}
          placeholder={"Password"}
          onChange={this.onInput.bind(this, "password")}
          value={password}
        />
        <Buttons name={"SIGN UP"} onClick={this.handleSubmit} />
      </InputBox>
    );
    if (this.state.isLogin) {
      return <Redirect to="/" />;
    } else {
      return (
        <Main>
          <Header>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <h3>Reactor</h3>
            </Link>
          </Header>
          <Body>
            <Form>
              <Choice>
                <Button onClick={this.buttonClick.bind(this, "signup")}>
                  SIGN UP
                </Button>
                <Button onClick={this.buttonClick.bind(this, "login")}>
                  LOGIN
                </Button>
              </Choice>
              {this.state.signup ? Signup : Login}
            </Form>
          </Body>
        </Main>
      );
    }
  }
}

export default LoginPage;
