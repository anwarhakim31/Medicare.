import React, { useEffect, useState } from "react";
import { token } from "../constant/config";

const useFetchData = (url, trigger) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.errors);
        }

        setData(result.data);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, trigger]);

  return { data, loading, errors };
};

export default useFetchData;
