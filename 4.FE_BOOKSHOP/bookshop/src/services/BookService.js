import config from "../config.js";
import axios from "axios";
const api_url = config.api_url + "book";

const getBooks = async () => {
  try {
    const response = await axios.get(api_url);
    return response;
  } catch (error) {
    console.error("Error al obtener los libros:", error);
  }
};

export default {
  getBooks,
};
