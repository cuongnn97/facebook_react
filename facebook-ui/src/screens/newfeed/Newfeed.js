import React, { Component } from "react";
import Center from "./components/center/Center";
import Left from "./components/left/Left";
import Right from "./components/right/Right";

class Newfeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="newfeed_content">
        <Left/>
        <Center />
        <Right />
      </div>
    );
  }
}

export default Newfeed;
