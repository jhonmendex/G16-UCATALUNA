import config from "../config.js";
import axios from "axios";
const api_url = config.api_url + "user";

const login = async (email, password) => {
  try {
    const response = await axios
      .post(
        `${api_url}/login`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.error(error);
      });

    return response;
  } catch (error) {
    console.error("Error al iniciar sesion:", error);
  }
};

export default {
  login,
};
