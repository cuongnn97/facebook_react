import Header from "./components/header/Header";
import Left from "./components/left/Left";
import Right from "./components/right/Right";
import React, { Component } from "react";
import HiddenForm from "./components/right/components/HiddenForm";


class Home extends Component {
  // const { error, isPending, data: blogs } = useFetch('http://localhost:8000/posts')

  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    return (
      <div className="body_homepage">
        <Header />
        <div className="content_home">
          <Left />
          <Right />
        </div>
      </div>
    );
  }
}

export default Home;
