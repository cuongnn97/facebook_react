import Header from "./components/header/Header";
import Left from "./components/left/Left";
import Right from "./components/right/Right";
import React, { Component } from "react";
import HiddenForm from "./components/right/components/HiddenForm";

class Home extends Component {
  constructor(props) {
    super(props);
    const url = new URL(window.location.href);
    this.state = {
      user_id: url.searchParams.get("user_id")
    };
    console.log(this.state.user_id);
  }

  render() {
    return (
      <div className="body_homepage">
        <Header user_id={this.state.user_id} />
        <div className="content_home">
          <Left user_id={this.state.user_id} />
          <Right user_id={this.state.user_id} />
        </div>
      </div>
    );
  }
}

export default Home;
