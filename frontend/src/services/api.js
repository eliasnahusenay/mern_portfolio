// Use environment variable for the backend URL (fallback to localhost for development)
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Helper function to handle API requests
const handleRequest = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON (or text if needed)
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error("API request failed:", error);
    throw error; // Re-throw the error for the caller to handle
  }
};

// Fetch the backend message
export const fetchBackendMessage = async () => {
  return handleRequest(`${API_URL}/`);
};

// Fetch all users
export const fetchUsers = async () => {
  return handleRequest(`${API_URL}/api/users`);
};

// Create a new user
export const createUser = async (userData) => {
  return handleRequest(`${API_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};