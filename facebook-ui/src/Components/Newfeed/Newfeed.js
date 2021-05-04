import React, { Component } from "react";
import Center from "./Center";
import Left from "./Left";
import Right from "./Right";

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
