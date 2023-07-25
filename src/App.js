import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  const HandleOnChange = (event) => {
    let text = event.target.value;
    setSearchText(text);
    const result =
      searchText &&
      data.length > 0 &&
      data.filter((ele, index) => {
        return ele.title.toLowerCase().includes(searchText.toLowerCase());
      });
    setSearchData(result);
    console.log(result, "SearchDAta");
  };
  return (
    <div className="main-container">
      <div className="search-text">
      <input
        type="text"
        onChange={(e) => HandleOnChange(e)}
        value={searchText}
        placeholder="Search somthing here"
      />
</div>
<div className="search-content">      {searchData &&
        searchData.length > 0 &&
        searchData.map((ele, index) => {
          return <li>{ele.title} </li>;
        })}
        </div>

    </div>
  );
};

export default App;
