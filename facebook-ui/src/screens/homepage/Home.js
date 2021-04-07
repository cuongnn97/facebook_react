// import { useEffect, useState } from "react";
// import useFetch from "./useFetch";
import Header from "./components/header/Header";
import Left from "./components/left/Left";


const Home = () => {
  // const { error, isPending, data: blogs } = useFetch('http://localhost:8000/posts')

  return (
    <div className="body_homepage">
      <Header />
      <div className="content_home">
        <Left />
      </div>
    </div>
  );
}

export default Home;
