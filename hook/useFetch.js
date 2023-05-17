import { useState, useEffect } from "react";
import axios from "axios";
import info from "../data.json";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "fa6e1a2c37msh5bf366f34ba050dp10974ajsnc8c989ec3068",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      // const response = await axios.request(options);

      setData(info.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { isLoading, error, data, refetch };
};

export default useFetch;
