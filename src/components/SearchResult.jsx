import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { FetchDataFromApi } from "../utils/api";
import { Context } from "../context/ContextApi";
import LeftNav from "./LeftNav";
import SearchResultVideo from "./SearchResultVideo";

const SearchResult = () => {
  const [result, setResult] = useState();
  const searchQuery = useParams();
  const setLoading = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    FetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
  };

  return <div>zdsdf</div>;
};

export default SearchResult;
