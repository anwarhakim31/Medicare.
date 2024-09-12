import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const useFetchData = (url, trigger) => {
  const dispatch = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tkn = localStorage.getItem("token");
    setToken(tkn);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;

      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.errors);
        }
        if (res.status === 401) {
          navigate("/home");
          dispatch({ type: "LOGOUT" });
        }

        setData(result.data);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, trigger, token]); // Menambahkan token ke dependency array

  return { data, loading, errors };
};

export default useFetchData;
