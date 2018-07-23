import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import swal from "sweetalert";

const InputBox = styled.div`
  display: flex
  justify-content: center
  align-items: center
  width: 460px
  padding: 0 40px
  height: 50px
  margin: 20px
`;

const Input = styled.input`
  width: 250px
  height: 45px
  border: 1px solid grey
  padding-left: 20px
  font-size: 14px
`;

const Button = styled.button`
  width: 150px
  height: 53px
  border-radius: 50px
  background-color: #1e3656
  color: white
  text-align: center
  font-size: 14px
  margin-left: -20px
`;

class Subscribe extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
    this.subscribe = this.subscribe.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  subscribe(e) {
    let email = e.target.value;
    this.setState({ email });
  }

  handleSubmit(e) {
    e.preventDefault();

    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    let formData = new FormData();
    formData.append("email", this.state.email);
    axios({
      method: "post",
      url: "http://dev3.apppartner.com/Reactors/scripts/add-email.php",
      data: formData,
      config
    })
      .then(res => {
        if (res.status === 200) {
          swal({
            title: "Thank you for subscribe!"
          });
          this.setState({ email: "" });
        }
      })
      .catch(err => {
        swal({
          title: `Somthing happend, ${err}`,
          icon: "warning"
        });
      });
  }

  render() {
    const { email } = this.state;
    return (
      <InputBox>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={this.subscribe}
        />
        <Button onClick={this.handleSubmit}>Subscribe</Button>
      </InputBox>
    );
  }
}

export default Subscribe;
