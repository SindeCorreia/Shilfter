import React, { useState, useEffect } from "react";
import "./MenuIcon.css";
import axios from "axios";
import CardItem from "../CardItem/CardItem";
import SearchBar from "../Search/search";
import { Link } from "react-router-dom";

function Menu() {   
  const [items, setItems] = useState();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState();

  const getItems = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setItems(response.data));
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const searchItems = () => {
    let result = [];
    items &&
      search &&
      items
        .filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((item) => result.push(item));
    setSearchResult(result);
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    searchItems();
  }, [search]);

  return (
    <div className="main-list-container">
      <SearchBar search={search} handleChange={handleChange} />
      <h1 className="title">Product List</h1>
      <div className="card-container">
        {items && search === ""
          ? items.map((item) => (
              <Link key={item.id} to={`/item/${item.id}`}> {/* Alterado para "/item/:id" */}
                <CardItem item={item} />
              </Link>
            ))
          : null}
        {searchResult && search !== ""
          ? searchResult.map((item) => (
              <Link key={item.id} to={`/item/${item.id}`}> {/* Alterado para "/item/:id" */}
                <CardItem item={item} />
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}

export default Menu;
