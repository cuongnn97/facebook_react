import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
import React, { Component } from "react";
import HiddenForm from "./HiddenForm";

class Home extends Component {
  constructor(props) {
    super(props);
    const url = new URL(window.location.href);
    this.userId = url.searchParams.get("user_id");
    this.state = {
      showHideForm: false,
    };
  }

  showComponent = () => {
    this.setState({ showHideForm: !this.state.showHideForm });
  };

  render() {
    const { showHideForm } = this.state;
    return (
      <div>
        {showHideForm && <HiddenForm showComponent={this.showComponent} />}
        <div className="body_homepage" style={{opacity: this.state.showHideForm ? '0.5' : '1'}}>
          <Header user_id={this.userId} />
          <div className="content_home">
            <Left user_id={this.userId} />
            <Right
              user_id={this.userId}
              showComponent={this.showComponent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
