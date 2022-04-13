import React, { Component } from "react";
import Great from "./great";
import UserImage from "./download.jpg";

class Pages extends Component {
  render() {
    return (
      <>
        <h1> A new class component</h1>
        <Great />
        <img src={UserImage} alt="" />
      </>
    );
  }
}

export default Pages;
