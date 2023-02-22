import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "./constants";


function Weather({ searchTerm }) {
  const [searchResults, setSearchResults] = useState("");
  const token = sessionStorage.getItem("jwt");

  const handleSearch = () => {
    axios
      .get(SERVER_URL + `weather/${searchTerm}`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        setSearchResults(response.data.weather);
        console.log(response.data.weather);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };
  
  useEffect(() => {
    console.log("Search results updated:", searchResults);
  }, [searchResults]);
  
  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm]);

  return (
    <div>
      <h2>
        The current temperature in {searchTerm} is: {searchResults}&#xb0;C
      </h2>
    </div>
  );
}

export default Weather;