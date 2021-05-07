import { useState, useEffect } from "react";

const GetData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        if( data !== null){
          setData(data);
        }
      })
      .catch((err) => {});
  }, [url]);

  return { data };
};

export default GetData;
