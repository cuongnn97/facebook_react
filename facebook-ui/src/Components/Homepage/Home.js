import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import HiddenForm from "./HiddenForm";

class Home extends Component {
  constructor(props) {
    super(props);
    const url = new URL(window.location.href);
    this.state = {
      user_id: url.searchParams.get("user_id"),
      showHideForm: false,
    };
  }

  showComponent = (event) => {
    const node = ReactDOM.findDOMNode(this);
    const child = node.querySelector(".body_homepage");
    this.setState({ showHideForm: !this.state.showHideForm });
    if (this.state.showHideForm) {
      child.style.opacity = "1";
    } else {
      child.style.opacity = "0.5";
    }
  };

  render() {
    const { showHideForm } = this.state;
    return (
      <div>
        {showHideForm && <HiddenForm showComponent={this.showComponent} />}
        <div className="body_homepage">
          <Header user_id={this.state.user_id} />
          <div className="content_home">
            <Left user_id={this.state.user_id} />
            <Right
              user_id={this.state.user_id}
              showComponent={this.showComponent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
