import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const FetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
