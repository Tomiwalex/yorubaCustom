/* eslint-disable no-undef */
import { useState, useCallback, useEffect } from "react";
import axios from "axios";

const usePostData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //   function to handle error message
  useEffect(() => {
    const clearErrorTimeout = () => {
      if (error) {
        const timeoutId = setTimeout(() => {
          setError(null);
        }, 5000);

        return () => clearTimeout(timeoutId);
      }

      return () => {};
    };

    const timeoutId = clearErrorTimeout();

    return () => clearTimeout(timeoutId);
  }, [setError, error]);

  const postData = useCallback(
    async (body) => {
      setLoading(true);
      console.log(url);
      try {
        const response = await axios.post(
          import.meta.env.VITE_API_URL + `${url}`,
          body,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
          }
        );
        setData(response.data.message);
      } catch (err) {
        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError(err.message);
        }
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  return { data, error, loading, postData, setData };
};

export default usePostData;
