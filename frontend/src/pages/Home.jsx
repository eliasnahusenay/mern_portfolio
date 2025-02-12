import React, { useEffect, useState } from "react";
import { fetchBackendMessage } from "../services/api";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getMessage = async () => {
      try {
        const data = await fetchBackendMessage();
        setMessage(data);
      } catch (error) {
        console.error("Error:", error);
        setMessage("Failed to load message from the backend.");
      }
    };

    getMessage();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>Backend Message: {message}</p>
    </div>
  );
};

export default Home;